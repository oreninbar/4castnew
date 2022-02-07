import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import useEntrance from "../hooks/useEntrance";
import "../style/entrance.css";

const Entrance = () => {
  const { nextPage, error } = useAppContext();
  const { name, handleInput } = useEntrance();

  return (
    <div className="entrance-container">
      <div className="form-wrapper">
        <input
          className="entrance-input"
          type="text"
          placeholder="הזן שם"
          values={name}
          dir="rtl"
          onChange={handleInput}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              nextPage("header", name);
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
          onClick={() => nextPage("header", name)}
        >
          המשך
        </button>
      </div>
    </div>
  );
};

export default Entrance;
