import React from "react";
import useAmericanQuestion from "../hooks/useAmericanQuestion";
import { useAppContext } from "../hooks/useAppContext";
import "../style/americanquestion.css";
import AmericanAnswer from "./AmericanAnswer";

const AmericanQuestion = (props) => {
  const { nextPage, error } = useAppContext();
  const { answer, chooseAnswer, answerSelected } = useAmericanQuestion();

  return (
    <div
      className={`americanquestion-container`}
      tabIndex={0}
      onKeyPress={(e) =>
        e.key === "Enter" && nextPage(props.pageNumber, answer)
      }
    >
      <div className="question-wrapprer">{props.questionData.question}</div>
      <div className="answers-container">
        {props.questionData.questionPossibleAnswers.map((a, k) => (
          <AmericanAnswer
            answer={a}
            key={k}
            answerNumber={k}
            chooseAnswer={chooseAnswer}
            answerSelected={answerSelected}
          />
        ))}
      </div>
      {error && (
        <p
          style={{
            color: "red",
            fontSize: "1.6rem",
            fontWeight: "500",
            position: "absolute",
            bottom: "1rem",
          }}
        >
          {error}*
        </p>
      )}

      <div className="btn-wrapper">
        <button
          className="continue_btn"
          onClick={() => nextPage(props.pageNumber, answer)}
        >
          המשך
        </button>
      </div>
    </div>
  );
};

export default AmericanQuestion;
