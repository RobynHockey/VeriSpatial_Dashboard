import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/Model/Model2.gltf"); // adjust extension if needed
  return <primitive object={gltf.scene} scale={1} />;
}

export default function ThreeMap() {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
