import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import { Plane, Box } from '@react-three/drei';

const InteriorRoom: React.FC = () => {
  const wallMaterial = new MeshStandardMaterial({ color: 'white' });
  const floorMaterial = new MeshStandardMaterial({ color: 'white' });

  return (
    <Canvas 
      style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={0.9} />
      <OrbitControls />

      {/* Floor */}
      <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} material={floorMaterial} />

      {/* Walls */}
      {/* <Box args={[10, 3, 0.1]} position={[0, 1.5, -5]} material={wallMaterial} /> Black Walls  */}
      <Box args={[10, 3, 0.1]} position={[0, 1.5, 5]} material={wallMaterial} />  {/* Front Walls */}
      {/* <Box args={[0.1, 3, 10]} position={[-5, 1.5, 0]} material={wallMaterial} /> Left Walls */}
      <Box args={[0.1, 3, 10]} position={[5, 1.5, 0]} material={wallMaterial} />  {/* Right Walls */}
    </Canvas>
  );
};

export default InteriorRoom;