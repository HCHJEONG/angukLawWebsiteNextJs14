import { useLayoutEffect } from "react";
// import { Previewer } from "pagedjs";
import { Previewer, Chunker } from "../../utils/paged-penvot";

const BookViewer = () => {
  
  useLayoutEffect(() => {
    // if (
    //   !document 
    //   || 
    //   !(document!.querySelector("#pagedjsdocroot")) 
    //   || 
    //   !(document.querySelector("#ebookreader"))
    // ) {
    //   return;
    // }
    const previewer = new Previewer();
    previewer
      .preview(
        document!.querySelector("#pagedjsdocroot")!.innerHTML,
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
        document.querySelector("#ebookreader")
      )
      .then((flow) => {
        console.log("ebookreader rendered, total pages", flow.total, { flow });
        if (document.querySelectorAll(".pagedjs_pages").length > 1){
          document!.querySelector(".pagedjs_pages")!.innerHTML='';
          document!.querySelector(".pagedjs_pages")!.remove();
        }
      });

    return () => {
      document.head
        .querySelectorAll("[data-pagedjs-inserted-styles]")
        .forEach((e) => e.parentNode?.removeChild(e));
    };

  }, []);

  // return <div></div>;
  return null;
  
};

export default BookViewer;
