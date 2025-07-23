import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function GlowingLight() {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  // Animate light position/intensity on scroll
  useEffect(() => {
    if (!lightRef.current) return;
    const light = lightRef.current;
    gsap.to(light.position, {
      x: 2,
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
    gsap.to(light, {
      intensity: 2.5,
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight
        ref={lightRef}
        position={[4, 1, 2]}
        intensity={1.2}
        color={0xfff7b2}
        distance={8}
        decay={2}
        castShadow
      />
      <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[2.5, 0, 0]}>
        <meshPhysicalMaterial
          emissive={new THREE.Color('#fff7b2')}
          emissiveIntensity={1.5}
          color="#fff7b2"
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </>
  );
}

const HeroLightEffect = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      width: '60vw',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} gl={{ alpha: true }}>
        <GlowingLight />
      </Canvas>
    </div>
  );
};

export default HeroLightEffect; 