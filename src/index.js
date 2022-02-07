import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { AppProvider } from "./context/appContext.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import createQuestionsList from "./functions/createQuestionsList";
let data = createQuestionsList();
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <DndProvider backend={HTML5Backend}>
        <App data={data} />
      </DndProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
