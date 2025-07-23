// HeroSection.tsx
import { useEffect, useRef, useState } from "react";
import logoSrc from "../assets/logo-white.svg";
import * as THREE from "three";
import vertexShader from "../assets/nebula.vert?raw";
import fragmentShader from "../assets/nebula.frag?raw";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const threeCanvasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Load the SVG logo as an image
  useEffect(() => {
    const img = new window.Image();
    img.src = logoSrc;
    img.onload = () => {
      logoImgRef.current = img;
    };
  }, []);

  // Three.js setup for nebula and logo
  useEffect(() => {
    if (!threeCanvasRef.current || dimensions.width === 0 || dimensions.height === 0 || !logoImgRef.current) return;

    // Clean up previous renderer if any
    while (threeCanvasRef.current.firstChild) {
      threeCanvasRef.current.removeChild(threeCanvasRef.current.firstChild);
    }

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, dimensions.width / dimensions.height, 0.1, 1000);
    camera.position.z = 1;

    // Create volumetric light beam
    const beamGeometry = new THREE.PlaneGeometry(5, 5);
    const beamMaterial = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(dimensions.width, dimensions.height) },
        u_color: { value: new THREE.Color(0xffffff) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec3 u_color;
        varying vec2 vUv;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        void main() {
          vec2 uv = vUv;
          
          // Create beam shape
          float beam = 0.0;
          float noise = 0.0;
          
          // Main beam
          float angle = atan(uv.y - .1, uv.x - 0.7);
          float dist = length(uv - vec2(0.5));
          
          // Create volumetric effect
          float beamWidth = .5;
          float beamIntensity = 1.0 - smoothstep(0.0, 1.0, dist);
          float beamAngle = smoothstep(-0.5, 0.2, cos(angle - 0.785)); // 45 degrees
        
          
          // Combine effects
          beam = beamIntensity * beamAngle * (0.8 + noise);
          
          // Add glow
          float glow = 1.0 - smoothstep(0.0, 0.5, dist);
          beam += glow * 0.2;
          
          // Final color
          vec3 color = u_color * beam;
          float alpha = beam * 0.8;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const beam = new THREE.Mesh(beamGeometry, beamMaterial);
    beam.rotation.z = Math.PI / 9; // 45 degrees
    beam.position.set(0, 1.3, 0); // Position at top-left
    scene.add(beam);

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(dimensions.width, dimensions.height);
    renderer.setClearColor(0x000000, 0);
    threeCanvasRef.current.appendChild(renderer.domElement);

    // Create logo texture
    const logoTexture = new THREE.Texture(logoImgRef.current);
    logoTexture.needsUpdate = true;
    logoTexture.minFilter = THREE.LinearFilter;
    logoTexture.magFilter = THREE.LinearFilter;

    // Create golden gradient for logo
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Set canvas size to match logo's aspect ratio
      const aspectRatio = logoImgRef.current.width / logoImgRef.current.height;
      const baseSize = 1024; // High resolution for sharpness
      canvas.width = baseSize;
      canvas.height = baseSize / aspectRatio;
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)'); // Pure white
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.98)'); // Bright white
      gradient.addColorStop(1, 'rgba(240, 240, 240, 0.95)'); // Slightly off-white

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'destination-in';
      ctx.drawImage(logoImgRef.current, 0, 0, canvas.width, canvas.height);
    }

    const gradientTexture = new THREE.Texture(canvas);
    gradientTexture.needsUpdate = true;
    gradientTexture.minFilter = THREE.LinearFilter;
    gradientTexture.magFilter = THREE.LinearFilter;

    // Create nebula material with random initial offset
    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(dimensions.width, dimensions.height) },
      u_offset: { value: new THREE.Vector2(Math.random() * 100, Math.random() * 100) },
      u_mouse: { value: new THREE.Vector2(-10, -10) } // Offscreen by default
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    // Create a plane that fills the screen for nebula
    const geometry = new THREE.PlaneGeometry(5, 5);
    const nebula = new THREE.Mesh(geometry, material);
    scene.add(nebula);

    // Create logo material with custom shader
    const logoMaterial = new THREE.ShaderMaterial({
      uniforms: {
        u_texture: { value: gradientTexture },
        u_time: { value: 0 },
        u_depth: { value: 0.1 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vDepth;
        uniform float u_depth;
        
        void main() {
          vUv = uv;
          vDepth = position.z * u_depth;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vDepth;
        uniform sampler2D u_texture;
        
        void main() {
          vec4 texColor = texture2D(u_texture, vUv);
          float alpha = texColor.a * (1.0 - abs(vDepth));
          gl_FragColor = vec4(texColor.rgb, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor
    });

    // Calculate logo dimensions maintaining aspect ratio
    const logoAspectRatio = logoImgRef.current.width / logoImgRef.current.height;
    const logoWidth = 1;
    const logoHeight = logoWidth / logoAspectRatio;

    // Create logo mesh with proper aspect ratio
    const logoGeometry = new THREE.PlaneGeometry(logoWidth, logoHeight, 1, 1);
    const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
    logoMesh.position.z = 0; // Slightly in front of nebula
    scene.add(logoMesh);

    // Animation loop
    const animate = () => {
      uniforms.u_time.value += 0.009;
      logoMaterial.uniforms.u_time.value = uniforms.u_time.value;
      beamMaterial.uniforms.u_time.value = uniforms.u_time.value;
      
      // Add some random movement to the nebula
      uniforms.u_offset.value.x += Math.sin(uniforms.u_time.value * 0.1) * 0.01;
      uniforms.u_offset.value.y += Math.cos(uniforms.u_time.value * 0.15) * 0.01;
      
      // Subtle movement for logo
      logoMesh.rotation.z = Math.sin(uniforms.u_time.value * 0.2) * 0.02;
      logoMesh.position.y = Math.sin(uniforms.u_time.value * 0.1) * 0.02;
      
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      if (!threeCanvasRef.current) return;
      const { width, height } = threeCanvasRef.current.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Mouse move event to update u_mouse
    const handleMouseMove = (event: MouseEvent) => {
      if (!threeCanvasRef.current) return;
      const rect = threeCanvasRef.current.getBoundingClientRect();
      // Normalize mouse position to [0, 1] in local canvas coordinates
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1.0 - (event.clientY - rect.top) / rect.height; // flip Y for GL
      uniforms.u_mouse.value.set(x, y);
    };
    threeCanvasRef.current.addEventListener('mousemove', handleMouseMove);
    // On mouse leave, move offscreen
    threeCanvasRef.current.addEventListener('mouseleave', () => {
      uniforms.u_mouse.value.set(-10, -10);
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (threeCanvasRef.current) {
        threeCanvasRef.current.removeEventListener('mousemove', handleMouseMove);
        threeCanvasRef.current.removeEventListener('mouseleave', () => {
          uniforms.u_mouse.value.set(-10, -10);
        });
      }
    };
  }, [dimensions, logoImgRef.current]);

  return (
    <>
    {/* Hero Section */}
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >      
      {/* Three.js Canvas for nebula and logo */}
      <div
        ref={threeCanvasRef}
        className="absolute inset-0 w-full h-full z-10"
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-black z-0"></div>

      {/* Content */}
      <div className="absolute z-10 text-center px-6 max-w-6xl mx-auto bottom-20">
        {/* Subheading */}
        <p className="text-md md:text-l capitalize text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        Introducing AIBAMS — our next-gen AI business suite.<br/> Launching with 6 powerful tools  & 45+ on the way,<br/> this is just the beginning
        </p>
      </div>
      
    </section>
  </>
  );
}
