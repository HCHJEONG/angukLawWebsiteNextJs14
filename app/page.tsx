'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { Hi_Melody } from 'next/font/google'; 
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
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
  setTimeout(()=>{
    setMoving(true);
  })
  // for small viewport like mobile 
  setTimeout(()=>{
    ref?.current?.scrollIntoView({
      inline: "nearest", //-수평 요소에 대한 옵션
      behavior: "smooth" // -스크롤 시 smooth한 효과를 주고 싶을 때});
    });
  }, 6500)
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100dvw',
        height: '100dvh',
      }}
    >  
      {/* <Background /> */}
      <main 
        className={styles.main}
      >
        <div className={styles.description}>
          <div>
            &nbsp;
            <span
              style={{fontSize:'1rem',}}
            >
              2001 ESTD.
            </span>
          </div>
          <div>
          {/* <p> */}
            <a
              href="https://penvot.com/desk/ce7c148fb51a082809cd2508e4d8ec910ae14d9f1e9b652f75ca8cd3dcf4585e"
              target="_blank"
              rel="noopener noreferrer"
              className={hiMelody.className}
              style={{fontSize:'1rem',}}
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
          {/* </p> */}
        </div>

        <div 
          className={styles.center}
          style={{
            transform: `${moving?'translateY(-80px)':'none'}`,
            transition: 'normal 3s linear 0.5s',
            position: 'sticky',
            top: '0px'
          }}
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
            // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            // href="http://localhost:3000/about"
            className={styles.card}
            onClick={()=>router.push('/about')}
            style={{textAlign:'center', cursor: 'pointer'}}
          >
            <h4
              style={{opacity:0.5}}
            >
              소개 
              {/* <span>-&gt;</span> */}
            </h4>
          </a>

          <a
            // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            onClick={()=>router.push('/members')}
            style={{textAlign:'center', cursor: 'pointer'}}
          >
            <h4
              style={{opacity:0.5}}
            >
              구성원 
              {/* <span>-&gt;</span> */}
            </h4>
          </a>

          <a
            // href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            onClick={()=>router.push('/areas')}
            style={{textAlign:'center', cursor: 'pointer'}}
          >
            <h4
              style={{opacity:0.5}}
            >
              업무분야 
              {/* <span>-&gt;</span> */}
            </h4>
          </a>

          <a
            // href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            onClick={()=>router.push('/contact')}
            style={{textAlign:'center', cursor: 'pointer'}}
            ref={ref}
          >
            <h4
              style={{opacity:0.5}}
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
