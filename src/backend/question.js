export class Question {
  question = "";
  solution = "";
  questionOrderPosition = 0;
  title = "";
  type = "";
  id ;

  constructor(question, questionSolution, title, type, id) {
    this.setSolution(questionSolution);
    this.setQuestion(question);
    this.setTitle(title);
    this.setType(type);
    this.setId(id);
  }

  setId = (id) => {
    this.id = id;
  };

  getId = () => {
    return this.id;
  };

 

  getType = () => {
    return this.type;
  };
  setType = (type) => {
    this.type = type;
  };
  getSolution = () => {
    return this.solution;
  };

  setSolution = (questionSolution) => {
    this.solution = questionSolution;
  };

  getQuestion = () => {
    return this.question;
  };
  setQuestion = (question) => {
    this.question = question;
  };

  setTitle = (title) => {
    this.title = title;
  };
}
