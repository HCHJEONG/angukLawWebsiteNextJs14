/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Manuscript from "./Manuscript";

const Book = ({setInnerHTML}:any) => {

  return (
    <div> 
      <Manuscript setInnerHTML={setInnerHTML}></Manuscript>
    </div>
  );
};

export default Book;