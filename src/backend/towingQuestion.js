import { Question } from "./question";

export default class TowingQuestion extends Question {
  questionPossibleAnswers = [];
  solution = [0, 1, 2, 3];
  constructor(question, questionSolution, title, type, id) {
    super(question, questionSolution, title, type, id);
  }

  isRightAnswer = (userAnswer) => {
    for (const index in this.solution) {
      if (this.solution[index]+1 !== userAnswer[index]) return false;
    }
    return true;
  };
}
