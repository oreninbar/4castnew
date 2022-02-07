import React from "react";

import "./App.css";
import Header from "./components/Header";
import PageDots from "./components/PageDots";
import { useAppContext } from "./hooks/useAppContext";
import "./App.css";
import useApp from "./hooks/useApp";
function App({ data }) {
  const { pageNumber } = useAppContext();
  const { getComponent, getDot, isQuestionPage } = useApp();

  return (
    <div className="app-container">
      <Header />
      <div className={`question_page-container `}>
        {isQuestionPage(pageNumber) && (
          <div className="title-container">
            <h2 className="title">
              {data.questions.questionsOrder[pageNumber] - 1 > -1
                ? data.questions.questionsList[
                    data.questions.questionsOrder[pageNumber] - 1
                  ].title
                : null}
            </h2>
          </div>
        )}
        {
          <div className="page-container">
            {data.questions.questionsOrder[pageNumber] - 1 < 3
              ? getComponent(
                  data.questions.questionsOrder[pageNumber],
                  data.questions.questionsList[
                    data.questions.questionsOrder[pageNumber] - 1
                  ]
                )
              : getComponent(data.questions.questionsOrder[pageNumber],data)}
          </div>
        }
      </div>
      {isQuestionPage(pageNumber) && <PageDots dot={getDot(pageNumber)} />}
    </div>
  );
}

export default App;
