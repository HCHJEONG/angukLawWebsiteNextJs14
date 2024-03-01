'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

// import { Inter } from "next/font/google";
import { Noto_Sans_KR } from 'next/font/google'; 
import { Hi_Melody } from 'next/font/google'; 
import "./globals.css";
import styles from "./page.module.css";

// const inter = Inter({ subsets: ["latin"] });
/**적용하고자 하는 font*/
const hiMelody = Hi_Melody({
  weight: ['400'],
  // subsets: ['latin'],
  preload: false,
});
/**적용하고자 하는 font*/
const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  // subsets: ['latin'],
  preload: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const router=useRouter();

  return (
    <html lang="ko">
      <body className={notoSansKr.className}>

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
      
        <main className={styles.main}>        
          {children}
        </main>

        <div className={styles.grid}>
          <a
            className={styles.card}
            onClick={()=>router.push('/')}
          >
            <h4
              className={styles.half_opacity}
            >
              HOME 
              {/* <span>-&gt;</span> */}
            </h4>
          </a>
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
          >
            <h4
              className={styles.half_opacity}
            >
              오시는 길 
              {/* <span>-&gt;</span> */}
            </h4>
          </a>
        </div>
  
      </body>
    </html>
  );
}
