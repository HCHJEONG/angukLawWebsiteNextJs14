'use client';

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";
import { Hi_Melody } from 'next/font/google'; 
// import Background from "@/components/Background";

/**적용하고자 하는 font*/
const hiMelody = Hi_Melody({
  weight: ['400'],
  // subsets: ['latin'],
  preload: false,
});

// https://mycodings.fly.dev/blog/2024-01-13-nextjs-14-tutorial-1-all-about-routing
export default function Home() {
  const router=useRouter();
  const ref = useRef<any>(null);
  const [moving, setMoving]=useState(false);
  useEffect(() => {

    setTimeout(()=>{
      setMoving(true);
    });
    // for small viewport like mobile 
    setTimeout(()=>{
      ref?.current?.scrollIntoView({
        inline: "nearest", //-수평 요소에 대한 옵션
        behavior: "smooth" // -스크롤 시 smooth한 효과를 주고 싶을 때});
      });
    }, 6500);

  });
  
  return (
    <div
      className={styles.wrapper}
    >  
      {/* <Background /> */}
      <main 
        className={styles.main}
      >
        <div className={styles.description}>
          <div>
            &nbsp;
            <span
              className={styles.uppersides}
            >
              2001 ESTD.
            </span>
          </div>
          <div>
            <a
              href="https://penvot.com/desk/ce7c148fb51a082809cd2508e4d8ec910ae14d9f1e9b652f75ca8cd3dcf4585e"
              target="_blank"
              rel="noopener noreferrer"
              className={`${hiMelody.className} ${styles.uppersides}`}
            >
              변호사 정희찬의 서재 방문{" "}
              <Image
                src="/penvotlogosquare.png"
                alt="Penvot Logo"
                className={styles.angukLogo}
                width={25}
                height={25}
                priority
              />
            </a>
          </div>
        </div>

        <div 
          className={`${moving?styles.center_moving:styles.center_not_moving}`}
        >
          <Image
            className={styles.logo}
            src="/anguklawofficeslogo.png"
            alt="Anguk Law Offices Logo"
            width={280}
            height={65}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            className={styles.card}
            onClick={()=>router.push('/about')}
          >
            <h4
              className={styles.half_opacity}
            >
              소개 
              {/* <span>-&gt;</span> */}
            </h4>
          </a>

          <a
            className={styles.card}
            onClick={()=>router.push('/members')}
          >
            <h4
              className={styles.half_opacity}
            >
              구성원 
              {/* <span>-&gt;</span> */}
            </h4>
          </a>

          <a
            className={styles.card}
            onClick={()=>router.push('/areas')}
          >
            <h4
              className={styles.half_opacity}
            >
              업무분야 
              {/* <span>-&gt;</span> */}
            </h4>
          </a>

          <a
            className={styles.card}
            onClick={()=>router.push('/contact')}
            ref={ref}
          >
            <h4
              className={styles.half_opacity}
            >
              오시는 길 
              {/* <span>-&gt;</span> */}
            </h4>
          </a>
        </div>
      </main>
    
    </div>
  );
}
