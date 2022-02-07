import React from "react";

const useCompletion = () => {
  const [completion, setCompletion] = React.useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setCompletion(e.target.value);
  }

  return {completion,handleInput}
};

export default useCompletion;
