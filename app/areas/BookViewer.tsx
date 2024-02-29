import { useLayoutEffect } from "react";
// import { Previewer } from "pagedjs";
import { Previewer, Chunker } from "../../utils/paged-penvot";

const BookViewer = ({triggerPagination, pagedjsdocrootref, ebookreaderref}:any) => {
  
  useLayoutEffect(() => {
    if (
      // !document
      // || 
      !pagedjsdocrootref.current// !(document!.querySelector("#pagedjsdocroot")) 
      || 
      !ebookreaderref.current // !(document.querySelector("#ebookreader"))
    ) {
      return;
    }
    console.log(pagedjsdocrootref);
    console.log(ebookreaderref.current.innerHTML);
    // if (ebookreaderref.current.children[0] && ebookreaderref.current.children[0].children[0]) {
    //   console.log(ebookreaderref.current.children[0].attributes);
    //   console.log(ebookreaderref.current.children[0].children[0].attributes);
    // }
    const previewer = new Previewer();
    previewer
      .preview(
        // document!.querySelector("#pagedjsdocroot")!.innerHTML,
        pagedjsdocrootref.current.innerHTML,
        // 1. img tag width를 여기서 80%로 제한하면 문단 나누기 기능 작동 문제가 사라진다.
        // 2. 렌더링된 후에 생성된 노드들에 대하여 다른 일반 css에 대한 관계에서 우선적용된다. 
        // 3. 브라우저가 해석할 수 없는 css에 대한 polyfill 기능이 작동한다.
        [
          { _:
            `
              img {
                max-width: 80% !important;
              }  
               
              .EditorTheme__textBold {
                font-size: 40px;
              }
              
              .pagedjs_page {
                background: white;
                border: 1px solid green;
              } 
              
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
        // document.querySelector("#ebookreader")
        ebookreaderref.current
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

  }, [ebookreaderref, pagedjsdocrootref, triggerPagination]);

  // return <div></div>;
  return null;
  
};

export default BookViewer;
