
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Anguk Law Offices",
  description: "a Korean Leading Law Firm",
};
import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  
  return (
    <div
      className={styles.home_wrapper}
    >  

      <div 
        className={styles.logo_wrapper}
      >
        <Image
          className={styles.logo}
          src="/assets/img/anguklawofficeslogo.png"
          alt="Anguk Law Offices Logo"
          width={280}
          height={65}
          priority
        />
      </div>
    
    </div>
  );
}