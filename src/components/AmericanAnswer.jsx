import React from "react";

const AmericanAnswer = (props) => {
  const pressed = () => {
    props.chooseAnswer(props.answer, props.answerNumber);
  };
  return (
    <div
      className={`ans-wrapper ${props.answerSelected[props.answerNumber]}`}
      onClick={() => pressed(props.answerNumber)}
    >
      {props.answer}
    </div>
  );
};

export default AmericanAnswer;
