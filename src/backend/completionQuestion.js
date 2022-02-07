import { Question } from "./question";

export default class CompletionQuestion extends Question {
  questionPossibleAnswers = [];
  solution = "פינות";

  constructor(question, questionSolution, title, type, id) {
    super(question, questionSolution, title, type, id);
  }



  isRightAnswer = (userAnswer) => {
    return this.solution === userAnswer;
  };
}
