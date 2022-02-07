import React from 'react';

const useEntrance = () => {
    const [name, setName] = React.useState("");

    const handleInput = (e) => {
      e.preventDefault();
      setName(e.target.value);
    };
  return {name,handleInput};
};

export default useEntrance;
