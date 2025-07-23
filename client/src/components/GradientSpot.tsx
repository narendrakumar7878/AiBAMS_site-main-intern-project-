import React, { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// Simple 2D noise function (GLSL)
const noiseGLSL = `
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform float u_time;

${noiseGLSL}

void main() {
    // Centered UV, scale for oval
    vec2 uv = vUv - 0.5;
    uv.x *= 1.5; // oval shape
    float r = length(uv);
    // Add noise for cloudiness
    float n = noise(uv * 3.0 + u_time * 0.05);
    float softness = 0.35 + 0.15 * n;
    float alpha = smoothstep(softness, softness - 0.18, r);
    // Blueish color
    vec3 color = mix(vec3(0.18,0.25,0.5), vec3(0.4,0.6,1.0), 1.0 - r);
    gl_FragColor = vec4(color, alpha * 1.0);
}
`;

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const GradientSpotMaterial = shaderMaterial(
  { u_time: 0 },
  vertexShader,
  fragmentShader
);
extend({ GradientSpotMaterial });

// Register the custom material type for TypeScript
// @ts-ignore
declare global {
  namespace JSX {
    interface IntrinsicElements {
      gradientSpotMaterial: any;
    }
  }
}

export default function GradientSpot() {
  const ref = useRef<any>();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.u_time = clock.getElapsedTime();
    }
  });
  return (
    <mesh position={[0, 0, -0.2]}>
      <planeGeometry args={[3, 2]} />
      <gradientSpotMaterial ref={ref} u_time={0} transparent={true} />
    </mesh>
  );
} 