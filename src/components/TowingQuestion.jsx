import React from "react";
import "../style/towingquestion.css";
import Square from "./Square";
import useBoard from "../hooks/useBoard";
import { useAppContext } from "../hooks/useAppContext";

function TowingQuestion(props) {
  const { nextPage, error } = useAppContext();
  const { board, setNewPosition, isEmpty } = useBoard();

  return (
    <div
      className="towingquestion-container"
      tabIndex={0}
      onKeyPress={(e) =>
        e.key === "Enter" && nextPage(props.pageNumber, board.slice(4))
      }
    >
      <div className="card-board board">
        {board.map(
          (card, i) =>
            i - 1 < 3 && (
              <Square
                squarePosition={i}
                cardNumber={card}
                key={i}
                setNewPosition={setNewPosition}
                checkIfEmpty={isEmpty}
                getImage={setNewPosition}
              />
            )
        )}
      </div>
      <div className="answers-board board">
        {board.map(
          (card, i) =>
            i > 3 && (
              <Square
                squarePosition={i}
                cardNumber={card}
                key={i}
                setNewPosition={setNewPosition}
                checkIfEmpty={isEmpty}
              />
            )
        )}
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
          onClick={() => nextPage(props.pageNumber, board.slice(4))}
        >
          המשך
        </button>
      </div>
    </div>
  );
}

export default TowingQuestion;
