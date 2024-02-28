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

  const pagedjsdocrootref = useRef<any>(null);
  const ebookreaderref = useRef<any>(null);

  const [innerHTML, setInnerHTML] = React.useState('');
  const [trigger, setTrigger] = React.useState(true);
  const [triggerPagination, setTriggerPagination] = React.useState(true);

  React.useEffect(()=>{
    if (!pagedjsdocrootref.current) return;

    console.log('footnotes processing');

    const footnotescripts = pagedjsdocrootref.current.querySelectorAll('.EditorTheme__footnotescript');
    if (footnotescripts) {
      let footnotescriptnumber = 0;
      for (let i=0; i < footnotescripts.length; i++){
        if (footnotescripts[i]) {
          footnotescriptnumber = footnotescriptnumber + 1;
          let dataContent = footnotescripts[i].getAttribute("data-content");
          if (dataContent) {
            footnotescripts[i].innerHTML = '';
            footnotescripts[i].innerHTML = footnotescriptnumber.toString() + ") " + dataContent;
          }
        }
      }
    }  
    const footnotes = pagedjsdocrootref.current.querySelectorAll('.EditorTheme__footnote');
    if (footnotes){
      for (let j=0; j < footnotes.length; j++){
        if (footnotes[j]) {
          footnotes[j].innerHTML = '';
          footnotes[j].remove();
        }
      }
    }   
    setTriggerPagination(!triggerPagination);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, pagedjsdocrootref])

  return (    
    <div className={styles.areas_wrapper}>
      <div 
        ref={pagedjsdocrootref}
        style={{ 
          display: "none",
        }}
      >
        <Book 
          pagedjsdocrootref={pagedjsdocrootref} 
          innerHTML={innerHTML} 
          setInnerHTML={setInnerHTML} 
          trigger={trigger} 
          setTrigger={setTrigger}
        >
        </Book>
      </div>
      <div ref={ebookreaderref} className={styles.ebook_reader}></div>
      <BookViewer triggerPagination={triggerPagination} pagedjsdocrootref={pagedjsdocrootref} ebookreaderref={ebookreaderref}></BookViewer>
    </div>
  )

}