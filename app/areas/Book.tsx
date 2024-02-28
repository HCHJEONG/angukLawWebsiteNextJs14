/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Manuscript from "./Manuscript";

const Book = ({pagedjsdocrootref, innerHTML, setInnerHTML, trigger, setTrigger}:any) => {

  React.useEffect(()=>{
    console.log(innerHTML);
    if (innerHTML === '' || !pagedjsdocrootref.current) return;
    const div = document?.createElement('div');
    div.innerHTML = innerHTML;
    pagedjsdocrootref.current.innerHTML = '';
    pagedjsdocrootref.current.appendChild(div);
    setTrigger(!trigger);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerHTML])
  return (
    <div> 
      <Manuscript setInnerHTML={setInnerHTML}></Manuscript>
    </div>
  );
};

export default Book;