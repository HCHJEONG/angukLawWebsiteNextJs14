'use client';

import styles from "./page.module.css";
import {Previewer} from "../../utils/paged-penvot";
import { useEffect, useRef } from "react";

export default function Areas () {

  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    new Previewer().preview(
      
      (ref.current?.innerHTML === null || ref.current!.innerHTML === '') 
      ? 
      '<div></div>' 
      : 
      ref.current!.innerHTML,
      [
        {_: 
          `
            @page {
              size: A4;
              margin: 30mm 30mm 30mm 30mm;
              @bottom-center { content: counter(page) " / " counter(pages); }
              
              @footnote {
                float: bottom;
              }
              
              marks: crop cross;
            }
                  
            .EditorTheme__footnotescript {
              float: footnote;
              position: footnotes;
            }
  
            ::footnote-call {
              content: counter(footnote, loweralpha);
              color: green;
              font-weight: 700;
              font-size: 12px;
              line-height: 0;
  
              vertical-align: super;
            }
  
            ::footnote-marker {
              content: "";
              color: black;
              font-weight: 500;
              font-size: 15px;
              line-height: 0;
            } 
                    
          `  
        }
      ],      
    )
    .then((flow: any) => {
      console.log("preview rendered, total pages", flow.total, { flow });
    });
    
  }, [ref])

  return (
    <div
      className={styles.areas_wrapper}
      ref={ref} 
    >
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus molestias, eaque nisi aliquam aspernatur sapiente quod deleniti nulla beatae voluptates ipsa ut libero perspiciatis cumque quidem porro amet maxime.
      </p>
    </div>
  )
}