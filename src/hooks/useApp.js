import React from "react";
import AmericanQuestion from "../components/AmericanQuestion";
import Entrance from "../components/Entrance";
import TowingQuestion from "../components/TowingQuestion";
import Results from "../components/Results";
import CompletionQuestion from "../components/ComletionQuestion";
const useApp = () => {

  const isQuestionPage = (pageNumber) => {
    return pageNumber !== 0 && pageNumber !== 4;
  };

  const getDot = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return "one";
      case 2:
        return "two";

      case 3:
        return "three";
      default:
        break;
    }
  };

  const getComponent = (pageNumber, questionData) => {
    switch (pageNumber) {
      case 0:
        return <Entrance />;
      case 1:
        return (
          <AmericanQuestion
            pageNumber={pageNumber}
            questionData={questionData}
          />
        );
      case 2:
        return (
          <CompletionQuestion
            pageNumber={pageNumber}
            questionData={questionData}
          />
        );
      case 3:
        return (
          <TowingQuestion pageNumber={pageNumber} questionData={questionData} />
        );
      case 4:
        return <Results pageNumber={pageNumber} questionData={questionData} />;
      default:
        break;
    }
  };
  return { getComponent, getDot, isQuestionPage };
};

export default useApp;
