import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text, Plane } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

function Pencil() {
  const pencilRef = useRef();
  const { viewport, size } = useThree();

  useFrame((state, delta) => {
    if (pencilRef.current) {
      pencilRef.current.rotation.x -= 2 * delta;
    }
  });

  const pencilLength = 4;
  const pencilRadius = 0.15;

  let scale;
  if (size.width < 768) {
    scale = (viewport.width / pencilLength) * 0.7;
  } else {
    scale = 1.0;
  }

  const textZPosition = pencilRadius * Math.cos(Math.PI / 6) + 0.001;

  return (
    <group ref={pencilRef} scale={scale} rotation={[0, 0, Math.PI / 2]}>
      {/* Main Hexagonal Body (Blue/Grey) */}
      <mesh>
        <cylinderGeometry args={[pencilRadius, pencilRadius, pencilLength, 6]} />
        <meshStandardMaterial color="#8a9bae" roughness={0.5} metalness={0.2} />
      </mesh>

      {/* End Cap (Blue) */}
      <mesh position={[0, -(pencilLength / 2) - 0.1, 0]}>
        <cylinderGeometry args={[pencilRadius, pencilRadius, 0.2, 6]} />
        <meshStandardMaterial color="#304ffe" />
      </mesh>

      {/* Sharpened Wood Tip */}
      <mesh position={[0, pencilLength / 2 + 0.1, 0]}>
        <coneGeometry args={[pencilRadius, 0.5, 6]} />
        <meshStandardMaterial color="#E2B38A" />
      </mesh>

      {/* Pencil Lead */}
      <mesh position={[0, pencilLength / 2 + 0.35, 0]}>
        <coneGeometry args={[0.03, 0.1, 32]} />
        <meshStandardMaterial color="#36454F" />
      </mesh>

      {/* Branding Text Group */}
      <group position={[0, 0, textZPosition]} rotation={[0, 0, -Math.PI / 2]}>
        {/* White stripe background */}
        <Plane args={[3.6, pencilRadius * 1.5]}>
          <meshStandardMaterial color="white" />
        </Plane>

        {/* Text Branding */}
        <Text
          position={[0, 0, 0.01]}
          fontWeight="bold"
          fontSize={0.18}
          color="#304ffe"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.002}
          outlineColor="black"
        >
          {"KUNDKUND STATIONERS"}
        </Text>
      </group>
    </group>
  );
}

export default function LoadingAnimation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("introSeen", "true");
      navigate("/book");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div style={{ height: "200vh", background: "#f0f0f0" }} />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "#f0f0f0",
        }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Pencil />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}
