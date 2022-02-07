import randomPosition from "../utils/randomPosition";

export default class QuestionsList {
  questionsList = [];
  questionsNumber = 3;
  questionsOrder = [1, 2, 3, 4, 5];

  constructor() {
    this.placePagesOrder(this.questionsNumber);
  }

  addQuestion = (question) => {
    this.questionsList.push(question);
  };

  removeQuestion = (questionID) => {
    const removedIndex = this.questionsList.findIndex(
      (element) => element.questionID === questionID
    );
    this.questionsList.splice(removedIndex);
  };


  countRightAnswers = (userAnswerList) => {
    let rightAnswers = 0;
    for (const question of userAnswerList) {
      question && rightAnswers++;
    }
    return rightAnswers;
  };

  placePagesOrder = (questionsNumber) => {
    let tempArr = [];
    tempArr[0] = 0;
    for (let i = 1; i < questionsNumber + 1; i++)
      tempArr[i] = randomPosition(tempArr, questionsNumber);
    tempArr[questionsNumber + 1] = questionsNumber + 1;
    this.questionsOrder = [...tempArr];
  };
}
