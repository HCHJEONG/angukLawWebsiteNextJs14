"use client";

import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Box, Cactus, Camera, Level, Sudo } from "../../components/Scene";
import styles from "./page.module.css";

export default function About () {
  return (
    <div
      className={styles.fullView}
      // style={{
      //   width: '100%',
      //   height: '100%',
      //   minHeight: '100dvh',
      //   backgroundColor: 'aquablue',
      // }}
    >
      <Canvas 
        flat 
      >
        <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
        <ambientLight intensity={Math.PI / 2} />
        <group scale={20} position={[0, -10, 0]}>
          <Level />
          <Sudo />
          <Camera />
          <Cactus />
          <Box position={[-0.8, 1.4, 0.4]} scale={0.15} />
        </group>
        <Environment preset="city" background blur={1} />
        <PerspectiveCamera makeDefault position={[80, 20, 80]} />
      </Canvas>
    </div>
  )
}