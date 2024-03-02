'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import i18n from "@/utils/i18n";

// import { Inter } from "next/font/google";
import { Noto_Sans_KR } from 'next/font/google'; 
import { Hi_Melody } from 'next/font/google'; 
import "./globals.css";
import styles from "./page.module.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

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
  const {t}=useTranslation();
  const [selectedI18n, setSelectedI18n]=useState('auto');
  useEffect(() => {
    if (selectedI18n==='ko') {
      i18n.changeLanguage('ko_KR');      
    } 
    if (selectedI18n==='en') {
      i18n.changeLanguage('en_US');
    }
    if (selectedI18n==='auto') {
      i18n.changeLanguage();
    }
    // https://dogcoder.tistory.com/entry/Nextjs-%EB%8B%A4%EA%B5%AD%EC%96%B4i18n-%EC%84%A4%EC%A0%95-react-i18next
  }, [selectedI18n])
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>

        <div className={"description"}>
          <div>
            &nbsp;
            <span
              className={"uppersides"}
            >
              {t("2001 ESTD.")}
            </span>
          </div>
          <div>
            <a
              href="https://penvot.com/desk/ce7c148fb51a082809cd2508e4d8ec910ae14d9f1e9b652f75ca8cd3dcf4585e"
              target="_blank"
              rel="noopener noreferrer"
              className={`${hiMelody.className} "uppersides"`}
            >
              {t("변호사 정희찬의 서재")}{" "}
              {/* <Image
                src="/penvotlogosquare.png"
                alt="Penvot Logo"
                className={styles.angukLogo}
                width={25}
                height={25}
                priority
              /> */}
            </a>
          </div>
        </div>
      
        <main className={"main"}>        
          {children}
        </main>
        <div className={"grid_wrapper"}>
          <div className={"grid"}>
            <a
              className={"card"}
              onClick={()=>router.push('/')}
            >
              <Image
                src="/assets/img/penvotlogosquare.png"
                alt="Penvot Logo"
                className={styles.angukLogo}
                width={16}
                height={16}
                priority
              />
            </a>
            <a
              className={"card"}
              onClick={()=>router.push('/about')}
            >
              <h4
                className={"half_opacity"}
              >
                {t("소개")}
              </h4>
            </a>

            <a
              className={"card"}
              onClick={()=>router.push('/members')}
            >
              <h4
                className={"half_opacity"}
              >
                {t("구성원")} 
              </h4>
            </a>

            <a
              className={"card"}
              onClick={()=>router.push('/areas')}
            >
              <h4
                className={"half_opacity"}
              >
                {t("업무분야")} 
                {/* <span>-&gt;</span> */}
              </h4>
            </a>

            <a
              className={"card"}
              onClick={()=>router.push('/contact')}
            >
              <h4
                className={"half_opacity"}
              >
                {t("오시는 길")} 
                {/* <span>-&gt;</span> */}
              </h4>
            </a>
          </div>
        </div>
  
      </body>
    </html>
  );
}
