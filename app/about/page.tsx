'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './page.module.css';

export default function About () {
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
            {t(
              "안국법률사무소는 사건 하나하나를 소중히 여깁니다. "
              +
              "사건에는 의뢰인의 고민과 가치가 담겨있고 안국법률사무소는 의뢰인의 고민과 가치를 소중하게 여기기 때문입니다. "
            )}
          </p>
          
          <p className={styles.para_wrapper}>
            {t(
              "중요한 일을 처리할 때 조력자가 필요하게 됩니다. "
              +
              "혼자서 모든 것을 처리할 수는 없는 법입니다. "
              +
              "그렇다면 조력자를 찾는 것은 그 중요한 일만큼 중요할 것입니다. "
            )}
          </p>
          
          <p className={styles.para_wrapper}>
            {t(
              "안국법률사무소는 2001년 3월 9일 개소한 이래 수많은 의뢰인들과의 신뢰를 지켜왔습니다. "
              +
              "20여 년이 지나는 동안 변화하는 세태 속에서도 묵묵히 한 장소에서 세상의 속도를 이기면서 의뢰인들과 동고동락을 해왔습니다. "
            )}
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
            {t(
              "안국법률사무소는 사건에 대해 연구합니다. "
              +
              "사건에는 항상 여러 이야기가 담겨 있습니다. "
              +
              "사건이 잘 정돈되어야만 비로소 숨겨진 것들이 드러나고 바른 판단이 가능해집니다."
            )}
          </p>
          <p className={styles.para_wrapper}>
            {t(
              "안국법률사무소는 신속하게 움직이지만 서두르지는 않습니다. "
              +
              "안국법률사무소는 일의 순서를 의뢰인과 논의합니다. "
              +
              "무엇보다도 의뢰인이 하고 싶은 말, 전달하려고 하는 메시지가 무엇인지를 이해하는 것에서 출발합니다. "
              +
              "전문지식에서 먼저 출발하지 않고 의뢰인의 이해와 소망을 출발점으로 삼습니다. "
              +
              "의뢰인이 이해할 수 없는 사무의 처리는 마치 도움이 된다는 이유로 동의 없이 시행하는 외과수술과도 같기 때문입니다."
            )}
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
            {t("국가기관이 정당하게 행위하지 않아 부당한 처지에 있게 되었는지요? ")}
          </p>
          <p className={styles.para_wrapper}>
            {t("당신을 안국법률사무소로 초대합니다. ")}
          </p>
          <p className={styles.para_wrapper}>
            {t("타인의 성실하지 못한 행위와 속이는 마음 때문에 피해를 보았는지요? ")}
          </p>
          <p className={styles.para_wrapper}>
            {t("당신을 안국법률사무소로 초대합니다. ")}
          </p>
          <p className={styles.para_wrapper}>
            {t("계획을 세웠지만 번거로운 절차들이 걸림돌이 되고 있는지요? ")}
          </p>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {t("당신을 안국법률사무소로 초대합니다. ")}
          </p>
          <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/myofficelobby.jpg"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={275}
              height={150}
              priority
            />
          </div>
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