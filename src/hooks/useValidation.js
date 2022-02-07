import React from "react";

const useValidation = () => {
  const [error, setError] = React.useState("");

  const checkValidation = (pageNum, answer) => {
    switch (pageNum) {
      case "header":
        if (answer === "") {
          setError("אנא הזן שם");
          return false;
        }
        return true;
      case 1:
        if (!answer) {
          setError("יש לבחור תשובה");
          return false;
        }
        return true;
      case 2:
        if (!answer) {
          setError("יש להזין תשובה");
          return false;
        }
        return true;
      case 3:
        if (!answer[0] || !answer[0] || !answer[0] || !answer[0]) {
          setError("יש למלא את כלל המשבצות");
          return false;
        }
        return true;
      default:
        break;
    }
  };
  return { checkValidation, error };
};

export default useValidation;
