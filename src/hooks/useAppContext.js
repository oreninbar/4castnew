import React from "react";
import { AppContext } from "../context/appContext";

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw Error("useUserContext must be used inside an UserContextProvider");
  }
  return context;
};

