import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingGeometry = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <dodecahedronGeometry args={[1]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.8}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bf00ff" />
      
      {/* Floating geometries */}
      <FloatingGeometry position={[-4, 2, -2]} color="#00ffff" />
      <FloatingGeometry position={[4, -2, -3]} color="#bf00ff" />
      <FloatingGeometry position={[0, 3, -4]} color="#ff1493" />
      <FloatingGeometry position={[-2, -3, -1]} color="#00ff7f" />
      
      {/* Wireframe sphere */}
      <Float speed={1} rotationIntensity={0.5}>
        <mesh position={[6, 0, -5]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial 
            wireframe 
            color="#00ffff" 
            transparent 
            opacity={0.3}
          />
        </mesh>
      </Float>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const ThreeScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;