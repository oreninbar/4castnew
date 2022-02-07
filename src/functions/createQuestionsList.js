import appQuestions from "../config/questions";
import QuestionsList from "../backend/questionsList";
import AmericanQuestion from "../backend/americanQuestion";
import CompletionQuestion from "../backend/completionQuestion";
import TowingQuestion from "../backend/towingQuestion";

const createQuestionsList = () => {
  let questions = new QuestionsList();

  const initQuestions = () => {
    for (const questionIndex in appQuestions) {
      questions.addQuestion(createQuestion(appQuestions[questionIndex]));
    }
  };

  const createQuestion = (questionObject) => {
    switch (questionObject.type) {
      case "AMERICAN":
        return new AmericanQuestion(
          questionObject.question,
          questionObject.questionSolution,
          questionObject.title,
          questionObject.type,
          questionObject.id,
          questionObject.answerOptions,
        );
      case "COMPLETION":
        return new CompletionQuestion(
          questionObject.question,
          questionObject.questionSolution,
          questionObject.title,
          questionObject.type,
          questionObject.id
        );

      case "TOWING":
        return new TowingQuestion(
          questionObject.question,
          questionObject.questionSolution,
          questionObject.title,
          questionObject.type,
          questionObject.id
        );
      default:
        break;
    }
  };

  initQuestions();
  return { questions };
};

export default createQuestionsList;
