// src/components/ParticleRing.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";

const ParticleRing = () => {
  return (
    <div className="relative w-screen h-screen bg-[#0b1120]">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <OrbitControls maxDistance={20} minDistance={8} />
        <PointCloud />
      </Canvas>

      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-5xl font-semibold pointer-events-none">
        Drag & Zoom
      </h1>
    </div>
  );
};

const PointCloud = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {pointsInner.map((point) => (
        <Particle key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Particle key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Particle = ({ position, color }) => (
  <Sphere position={position} args={[0.05, 8, 8]}>
    <meshStandardMaterial
      emissive={color}
      emissiveIntensity={0.8}
      roughness={0.2}
      color={color}
    />
  </Sphere>
);
export default ParticleRing;
