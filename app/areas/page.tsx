/* eslint-disable @next/next/no-img-element */
'use client';

import styles from "./page.module.css";
// import { Previewer, Chunker } from "../../utils/paged-penvot";
import { 
  // useEffect, 
  useRef 
} from "react";

import React from "react";
import BookViewer from "./BookViewer";
import Book from "./Book";

export default function Areas () {

  const pagedjsdocrootref = useRef(null);
  const ebookreaderref = useRef(null);
  return (    
    <div className={styles.areas_wrapper}>
      <div 
        ref={pagedjsdocrootref}
        style={{ 
          display: "none",
        }}
      >
        <Book></Book>
      </div>
      <div ref={ebookreaderref} className={styles.ebook_reader}></div>
      <BookViewer pagedjsdocrootref={pagedjsdocrootref} ebookreaderref={ebookreaderref}></BookViewer>
    </div>
  )

}