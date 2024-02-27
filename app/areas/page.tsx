/* eslint-disable @next/next/no-img-element */
'use client';

import styles from "./page.module.css";
// import { Previewer, Chunker } from "../../utils/paged-penvot";
// import { useEffect, useRef } from "react";

import React from "react";
import BookViewer from "./BookViewer";
import Book from "./Book";

export default function Areas () {

  return (    
    <div className={styles.areas_wrapper}>
      <div 
        id="pagedjsdocroot" 
        style={{ 
          display: "none",
        }}
      >
        <Book></Book>
      </div>
      <div id="ebook"></div>
      <BookViewer></BookViewer>
    </div>
  )

}