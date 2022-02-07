import randomPosition from "../utils/randomPosition";


const placePagesOrder = (questionsNumber) => {
  let tempArr = [];
  tempArr[0] = 0;
  for (let i = 1; i < questionsNumber; i++)
    tempArr[i] = randomPosition(tempArr, questionsNumber);
  tempArr[questionsNumber + 1] = questionsNumber + 1;
  return questionsOrder;
};

export default placePagesOrder;
