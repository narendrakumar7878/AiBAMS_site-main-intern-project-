// import React, { useRef } from 'react';
// import { shaderMaterial } from '@react-three/drei';
// import { extend, useFrame, useThree } from '@react-three/fiber';
// import * as THREE from 'three';
// import fragmentShader from '../assets/smoke.frag.ts?raw';
// import { Mesh } from 'three';
// import { PlaneGeometry } from 'three';

// // Define custom material
// const SmokeMaterial = shaderMaterial(
//   {
//     u_time: 0,
//     u_mouse: new THREE.Vector2(),
//     u_resolution: new THREE.Vector2()
//   },
//   /* vertex shader */ `
//     varying vec2 vUv;
//     void main() {
//       vUv = uv;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
//   `,
//   /* fragment shader */ fragmentShader
// );

// // Extend it into JSX as <smokeMaterial />
// extend({ SmokeMaterial });

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       smokeMaterial: ReactThreeFiber.Object3DNode<
//         ReturnType<typeof SmokeMaterial>,
//         typeof SmokeMaterial
//       >;
//     }
//   }
// }

// const SmokePlane: React.FC = () => {
//   const ref = useRef<any>();
//   const { size, mouse, viewport } = useThree();

//   useFrame(({ clock }) => {
//     if (ref.current) {
//       ref.current.uniforms.u_time.value = clock.getElapsedTime();
//       ref.current.uniforms.u_mouse.value.set(mouse.x * size.width, mouse.y * size.height);
//       ref.current.uniforms.u_resolution.value.set(size.width, size.height);
//     }
//   });

//   return (
//     // <mesh scale={[viewport.width, viewport.height, 1]}>
//     //   <planeGeometry args={[1, 1]} />
//     //   <smokeMaterial ref={ref} />
//     // </mesh>
//   );
// };

// export default SmokePlane;
