import React from "react";
import img1 from "../assets/f35_01.jpg";
import img2 from "../assets/f35_02.jpg";
import img3 from "../assets/f35_03.jpg";
import img4 from "../assets/f35_04.jpg";
import randomPosition from "../utils/randomPosition";
const useBoard = () => {
  const [board, setBoard] = React.useState([]);

  const initBoard = () => {
    let tempBoard = [];
    tempBoard[0] = randomPosition(tempBoard, 4);
    tempBoard[1] = randomPosition(tempBoard, 4);
    tempBoard[2] = randomPosition(tempBoard, 4);
    tempBoard[3] = randomPosition(tempBoard, 4);
    for (let i = 4; i < 8; i++) {
      tempBoard[i] = 0;
    }
    setBoard([...tempBoard]);
  };

  const isEmpty = (position) => {
    return board[position];
  };

  const setNewPosition = (cardNumber, newPosition, currentPosition) => {
    let tempBoard = board;
    if (tempBoard[newPosition] === 0) {
      tempBoard[newPosition] = cardNumber;
      tempBoard[currentPosition] = 0;
    } else if (tempBoard[newPosition] !== 0) {
      let replacedCard = tempBoard[newPosition];
      tempBoard[newPosition] = cardNumber;
      tempBoard[currentPosition] = replacedCard;
    }
    setBoard([]);
    setBoard([...tempBoard]);
  };

  const getImage = (imageNumber) => {
    switch (imageNumber) {
      case 1:
        return img1;
      case 2:
        return img2;
      case 3:
        return img3;
      case 4:
        return img4;
      default:
        break;
    }
  };

  React.useEffect(() => {
    initBoard();
  }, []);

  return { board, initBoard, isEmpty, setNewPosition, getImage };
};

export default useBoard;
