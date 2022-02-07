import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import "../style/results.css";
import right from "../assets/checked.png";
import wrong from "../assets/delete.png";
import useResult from "../hooks/useResult";

const Results = (props) => {
  const { userAllAnswers } = useAppContext();
  const { render, results, goodAnswersCounter, pagesOrderArray } = useResult(
    props.questionData
  );

  return (
    <div className="result-container">
      {render && (
        <div className="sentence-wrapper">
          <div className="sentence">
            {` הצלחת לענות על ${goodAnswersCounter} מתוך ${
              userAllAnswers.size - 1
            }`}{" "}
            ,
          </div>
          <span className="sentence">{userAllAnswers.get("header")}</span>
        </div>
      )}
      {render && (
        <div className="results-details">
          {pagesOrderArray.map((q, i) => (
            <div key={i} className="answer">
              <span className="img-wrapper">
                <img
                  src={results[q - 1] ? right : wrong}
                  alt="img"
                  style={{ height: "2rem" }}
                />
              </span>{" "}
              <span className="rightwrong">
                {results[q - 1] ? `ענית נכון` : `ענית לא נכון`}
              </span>{" "}
              <span>{`${
                props.questionData.questions.questionsList[q - 1].title
              }`}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
