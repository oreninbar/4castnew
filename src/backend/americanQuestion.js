import { Question } from "./question";

export default class AmericanQuestion extends Question {
  questionPossibleAnswers = [];
  solution = `ליאור רז`;
  constructor(question, questionSolution, title, type, id, answerOptions) {
    super(question, questionSolution, title, type, id);
    this.setPossibleSolution(answerOptions);
  }

  setPossibleSolution = (answerOptions) => {
    this.questionPossibleAnswers = answerOptions;
  };

  setAnswer = (questionPossibleAnswers) => {
    questionPossibleAnswers = [...questionPossibleAnswers];
  };  

  isRightAnswer = (userAnswer) => {
    return this.solution === userAnswer;
  };
}
