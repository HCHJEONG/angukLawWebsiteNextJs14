'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './page.module.css';

export default function Contact () {
  const {t}=useTranslation();
  return (
    <div className={styles.fullView}>
      <div className={styles.about_content_wrapper}>
        <div className={styles.about_content_column}>
          
          <div className={styles.image_wrapper}>
            <Image
              src="/assets/img/mypleading01.png"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={200}
              height={250}
              priority
            />
          </div>
          <p className={styles.para_wrapper}>
            {t("안국법률사무소는 사건 하나하나를 소중히 여깁니다. 사건에는 의뢰인의 고민과 가치가 담겨있고 안국법률사무소는 의뢰인의 고민과 가치를 소중하게 여기기 때문입니다.")}
          </p>
        </div>
        <div className={styles.about_content_column}>    
          <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/mydeskmonitor.jpg"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={275}
              height={145}
              priority
            />
          </div>
          <p className={styles.para_wrapper}>
            {t("안국법률사무소는 사건에 대해 연구합니다. 사건에는 항상 여러 이야기가 담겨 있습니다. 사건이 잘 정돈되어야만 비로소 숨겨진 것들이 드러나고 바른 판단이 가능해집니다.")}
          </p>
        </div>
        <div className={styles.about_content_column}> 
          <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/myofficebldgsunset.jpg"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={275}
              height={150}
              priority
            />
          </div>
          <p className={styles.para_wrapper}>
            {t("당신을 안국법률사무소로 초대합니다. ")}
          </p>
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