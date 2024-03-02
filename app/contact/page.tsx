'use client';

import { useTranslation } from 'react-i18next';
import styles from './page.module.css';

export default function Contact () {
  
  const {t}=useTranslation();
  return (
    <div className={styles.fullView}>
      <div className={styles.map_wrapper}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.1569048956408!2d126.98128919999999!3d37.574922799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2c203368715%3A0xd31a93e3cb87188!2zQW5ndWsgTGF3IE9mZmljZXMg5a6J5ZyL5rOV5b6L5LqL5YuZ5omA!5e0!3m2!1sen!2skr!4v1709370056411!5m2!1sen!2skr" 
          style={{
            width: '600px',
            height: '450px',
            border: '0',
          }}
          loading="lazy" 
        ></iframe>
      </div>
      <div className={styles.contact_wrapper}>
        <p className={styles.para_wrapper}>
          {t("주소 서울특별시 종로구 율곡로2길 7, 304호 (수송동, 서머셋팰리스서울) ")} 
          {/* <a 
            href='https://penvot.com'              
            target="_blank"
            rel="noopener noreferrer"
          >
            penvot.com
          </a> 
          {t("이란 서비스를 제공하고 있습니다. ")} */}
        </p>

        <p className={styles.para_wrapper}>
          {t("전화 02) 3210 - 3330 팩스 02) 734 - 5137  이메일 hcjeong@anguklaw.com")} 
          {/* <a 
            href='https://penvot.com'              
            target="_blank"
            rel="noopener noreferrer"
          >
            penvot.com
          </a> 
          {t("이란 서비스를 제공하고 있습니다. ")} */}
        </p>
        <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
          {t("당신을 안국법률사무소의 세계로 초대합니다. ")}
        </p>
      </div>
    </div>
  )
}