import React from "react";

const useAmericanQuestion = () => {
  const [answer, setAnswer] = React.useState();
  const [answerSelected, setAnswerSelected] = React.useState([
    false,
    false,
    false,
    false,
  ]);

  const chooseAnswer = (answer, answerNumber) => {
    let tempArr = [false, false, false, false];
    setAnswer(answer);
    tempArr[answerNumber] = true;
    setAnswerSelected([...tempArr]);
  };

  return { answer, chooseAnswer, answerSelected };
};

export default useAmericanQuestion;
