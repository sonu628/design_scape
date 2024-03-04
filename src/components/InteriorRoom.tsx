
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

type RoomProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
};

const Room = ({ position = [0, 0, 0], rotation = [0, 0, 0] }: RoomProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

type FloorProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
};

const Floor = ({ position = [0, 0, 0], rotation = [0, 0, 0] }: FloorProps) => {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

type WallProps = {
  position: [number, number, number];
  rotation: [number, number, number];
};

const Wall = ({ position, rotation }: WallProps) => {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[10, 100]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

const InteriorRoom = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Room />
      <Floor />
      <Wall position={[5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Wall position={[-5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Wall position={[0, 0, 5]} rotation={[0, Math.PI, 0]} />
    </Canvas>
  );
}

export default InteriorRoom;