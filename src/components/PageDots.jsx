import React from "react";
import "../style/pagedots.css";

const PageDots = (props) => {
  return (
    <div className="pagedots-container">
      <div className="dots-wrapper">
        <div className={`dot ${props.dot === "three" ? "three" : null}`}></div>
        <div className={`dot ${props.dot === "two" ? "two" : null}`}></div>
        <div className={`dot ${props.dot === "one" ? "one" : null}`}></div>
      </div>
    </div>
  );
};

export default PageDots;
