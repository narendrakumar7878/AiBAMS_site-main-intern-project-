import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import logoSrc from "../assets/logo-white.svg";

export default function LogoPlane() {
  // Load the logo as a texture
  const texture = useLoader(THREE.TextureLoader, logoSrc);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[3, 1]} />
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  );
} 