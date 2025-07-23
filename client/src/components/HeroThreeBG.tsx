import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroThreeBG() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, animationId: number;
    let sphere: THREE.Mesh;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 4;

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Sphere
    const geometry = new THREE.SphereGeometry(1.2, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00bbff,
      emissive: 0x222222,
      roughness: 0.3,
      metalness: 0.7,
      transparent: true,
      opacity: 0.95,
    });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Animation
    const animate = () => {
      sphere.rotation.y += 0.003;
      sphere.rotation.x += 0.0015;
      animationId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
} 