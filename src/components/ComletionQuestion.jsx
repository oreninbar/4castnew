import React from "react";
import "../style/completionquestion.css";
import useCompletion from "../hooks/useCompletion.js";
import { useAppContext } from "../hooks/useAppContext";

const CompletionQuestion = (props) => {
  const { nextPage, error } = useAppContext();
  const { handleInput, completion } = useCompletion();

  return (
    <div
      className="completionquestion-container"
      tabIndex={0}
      onKeyDown={(e) =>
        e.key === "Enter" && nextPage(props.pageNumber, completion)
      }
    >
      <div className="question-wrapprer">{props.questionData.question}</div>
      <div className="completion-wrapper">
        <input
          type="text"
          className="completion_input"
          dir="rtl"
          values={completion}
          onChange={handleInput}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              nextPage(props.pageNumber, completion);
            }
          }}
        />
      </div>
      {error && (
        <p
          style={{
            color: "red",
            fontSize: "1.6rem",
            fontWeight: "500",
            position: "absolute",
            bottom: "13rem",
          }}
        >
          {error}*
        </p>
      )}
      <div className="btn-wrapper">
        <button
          className="continue_btn"
          onClick={() => nextPage(props.pageNumber, completion)}
        >
          המשך
        </button>
      </div>
    </div>
  );
};

export default CompletionQuestion;
