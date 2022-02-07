import React from "react";
import { useAppContext } from "./useAppContext";

const useResult = (questionData) => {
  const { userAllAnswers } = useAppContext();
  const [render, setRender] = React.useState(false);
  const [results, setResult] = React.useState([]);
  const [goodAnswersCounter, setGoodAnswersCounter] = React.useState(0);
  const [pagesOrderArray, setPagesOrderArray] = React.useState([]);
  let tempArray = [];

  React.useEffect(() => {
    tempArray = questionData.questions.questionsOrder.slice(1);
    tempArray.splice(3, 1);
    setPagesOrderArray([...tempArray]);
    async function func() {
      await checkAnswers();
      setRender(true);
    }
    func();
  }, [render]);

  const checkAnswers = async () => {
    let tempArr = [];
    let counter = 0;
    for (let i = 1; i < 4; i++) {
      let ans = questionData.questions.questionsList[i - 1].isRightAnswer(
        userAllAnswers.get(i)
      );
      if (ans) {
        counter += 1;
        tempArr.push(true);
      } else tempArr.push(false);
    }

    setResult([...tempArr]);
    setGoodAnswersCounter(counter);
  };

  return { render, results, goodAnswersCounter, pagesOrderArray };
};

export default useResult;
