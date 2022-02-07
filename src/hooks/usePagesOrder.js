import React from "react";
import randomPosition from "../utils/randomPosition";
const usePagesOrder = () => {
  const [order, setOrder] = React.useState([1, 2, 3, 4, 5]);

  const placePagesOrder = () => {
    let tempArr = [];
    tempArr[0] = 0;
    tempArr[1] = randomPosition(tempArr, 3);
    tempArr[2] = randomPosition(tempArr, 3);
    tempArr[3] = randomPosition(tempArr, 3);
    tempArr[4] = 4;
    for (let i = 0; i < 5; i++) tempArr[i] += 1;
    setOrder(tempArr);
    console.log(tempArr);
  };

  React.useEffect(() => {
    placePagesOrder();
  }, []);

  return { order, placePagesOrder };
};

export default usePagesOrder;
