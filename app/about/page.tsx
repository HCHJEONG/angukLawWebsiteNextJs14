
import styles from './page.module.css';

export default function Contact () {
  return (
    <div className={styles.fullView}>
      <div className={styles.about_content_wrapper}>
        <div className={styles.about_content_column}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ratione ad ut iste maxime eligendi, soluta enim sint animi eveniet excepturi et tempore neque dolor assumenda, illum sunt vero in.
          aperiam, facilis cupiditate officiis atque est inventore vitae, iusto veniam autem amet quae eligendi expedita dolores?
        </div>
        <div className={styles.about_content_column}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis nemo id fugit minima totam adipisci dolorem nostrum, iure eaque impedit ex assumenda nulla neque debitis possimus recusandae sit dolore.
          nesciunt, sed doloremque perspiciatis iste suscipit inventore sequi perferendis fugiat nam amet error quam quibusdam nostrum?
        </div>
        <div className={styles.about_content_column}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis nemo id fugit minima totam adipisci dolorem nostrum, iure eaque impedit ex assumenda nulla neque debitis possimus recusandae sit dolore.
         repudiandae reprehenderit pariatur voluptatum reiciendis expedita libero accusantium dolore, nobis, repellendus tenetur ullam natus assumenda aliquid.
        </div>
      </div>
    </div>
  )
}

// "use client";

// import { Canvas } from "@react-three/fiber";
// import {
//   CameraControls,
//   Environment,
//   PerspectiveCamera,
// } from "@react-three/drei";
// import { Box, Cactus, Camera, Level, Sudo } from "../../components/Scene";
// import styles from "./page.module.css";

// export default function About () {
//   return (
//     <div
//       className={styles.fullView}
//       // style={{
//       //   width: '100%',
//       //   height: '100%',
//       //   minHeight: '100dvh',
//       //   backgroundColor: 'aquablue',
//       // }}
//     >
//       <Canvas 
//         flat 
//       >
//         <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
//         <ambientLight intensity={Math.PI / 2} />
//         <group scale={20} position={[0, -10, 0]}>
//           <Level />
//           <Sudo />
//           <Camera />
//           <Cactus />
//           <Box position={[-0.8, 1.4, 0.4]} scale={0.15} />
//         </group>
//         <Environment preset="city" background blur={1} />
//         <PerspectiveCamera makeDefault position={[80, 20, 80]} />
//       </Canvas>
//     </div>
//   )
// }