'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './page.module.css';

export default function Members () {
  const {t}=useTranslation();
  return (
    <div className={styles.fullView}>
      <div className={styles.members_content_wrapper}>
        <div className={styles.members_content_column}>
          
          <div className={styles.image_wrapper}>
            <Image
              src="/assets/img/myfacesuit.jpg"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={250}
              height={550}
              priority
            />
          </div>
          
        </div>
        <div className={styles.members_content_column}>    
          <p className={styles.para_wrapper}>
            {t(
              "서울대학교 법과대학 졸업 "
            )}
          </p>
          <p className={styles.para_wrapper}>
            {t(
              "사법시험 합격 "
            )}
          </p>
          <p className={styles.para_wrapper}>
            {t(
              "사법연수원 수료 "
            )}
          </p>
          <p className={styles.para_wrapper}>
            {t(
              "서울대학교 대학원 법학과 석사 졸업 "
            )}
            <br/>
            <span style={{fontSize: '0.8rem'}}>
              {t("석사학위 논문 ")}
            </span>
            <span style={{fontSize: '0.8rem', color: 'green',}}>
              {t("저작권법상 창작성 요건의 연구 ")}
            </span>
          </p>          
          <p className={styles.para_wrapper}>
            {t(
              "인도 델리대학교 법과대학 박사 졸업 "
            )}
            <br/>
            <span style={{fontSize: '0.8rem'}}>
              {t("박사학위 논문 ")}
            </span>
            <span style={{fontSize: '0.8rem', color: 'green',}}>
              {t("한국과 인도의 법인격 개념에 대한 비교 연구 ")}
            </span>
          </p>
          <p className={styles.para_wrapper}>
            {t(
              "한국외국어대학교 법과대학 강의 "
            )}
            <br/>
            <span style={{fontSize: '0.8rem'}}>
              {t("채권총론 ")}
            </span>
            <br/>
            <span style={{fontSize: '0.8rem'}}>
              {t("물권법 ")}
            </span>
          </p>
          <p className={styles.para_wrapper}>
            {t(
              "변호사시험 출제 및 채점위원 "
            )}
          </p>
          <p className={styles.para_wrapper}>
            {t(
              "안국법률사무소 안국파트너스 대표 "
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
