import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function CavnasPage() {
  return (
    <Canvas camera={{ position: [100, 100, 100], fov: 25 }}>
      <OrbitControls
        makeDefault
        minAzimuthAngle={0}
        // maxAzimuthAngle={Math.PI / 2}
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereBufferGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <color attach="background" args={["#ffffff"]} />
      <mesh
        scale={50}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2, 0]}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </Canvas>
  );
}
