
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Anguk Law Offices",
  description: "a Korean Leading Law Firm",
};
import Image from "next/image";

import styles from "./page.module.css";

// https://mycodings.fly.dev/blog/2024-01-13-nextjs-14-tutorial-1-all-about-routing
export default function Home() {
  // const ref = useRef<any>(null);
  // const [moving, setMoving]=useState(false);
  // useEffect(() => {

  //   setTimeout(()=>{
  //     setMoving(true);
  //   });
  //   // for small viewport like mobile 
  //   setTimeout(()=>{
  //     ref?.current?.scrollIntoView({
  //       inline: "nearest", //-수평 요소에 대한 옵션
  //       behavior: "smooth" // -스크롤 시 smooth한 효과를 주고 싶을 때});
  //     });
  //   }, 6500);

  // });
  
  return (
    <div
      className={styles.wrapper}
    >  

      <div 
        className={styles.center_not_moving}
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
    
    </div>
  );
}