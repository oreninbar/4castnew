import React from "react";
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [userAllAnswers, setAllAnswers] = React.useState(new Map());
  const [pageNumber, setPageNumber] = React.useState(0);
  const [error, setError] = React.useState("");

  const checkValidation = (pageNum, answer) => {
    switch (pageNum) {
      case "header":
        if (answer === "") {
          setError("אנא הזן שם");
          return false;
        } else return true;
      case 1:
        if (!answer) {
          setError("יש לבחור תשובה");
          return false;
        } else return true;
      case 2:
        if (!answer) {
          setError("יש להזין תשובה");
          return false;
        } else return true;
      case 3:
        if (!answer[0] || !answer[1] || !answer[2] || !answer[3]) {
          setError("יש למלא את כלל המשבצות");
          return false;
        } else return true;
      default:
        break;
    }
  };

  const setPageAnswer = (questionNumber, answer) => {
    userAllAnswers.set(questionNumber, answer);
  };

  const nextPage = (page, answer) => {
    if (checkValidation(page, answer)) {
      setPageNumber(pageNumber + 1);
      setError("");
    }
    setPageAnswer(page, answer);
  };

  const value = {
    pageNumber,
    nextPage,
    setPageAnswer,
    userAllAnswers,
    error,
  };

  return (
    <AppContext.Provider value={{ ...value }}>{children}</AppContext.Provider>
  );
};
