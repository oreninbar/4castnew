import React from "react";
import "../style/square.css";
import { useDrop } from "react-dnd";
import Card from "./Card";
import { ItemTypes } from "../constant/Constant";

const Square = (props) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      drop: (item) => {
        props.setNewPosition(
          item.cardNumber,
          props.squarePosition,
          item.cardCurrentPosition,
        );
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [props.cellPosition]
  );


  return (
    <div className="square-container" ref={drop} >
      {props.cardNumber ? (
        <Card
          cardNumber={props.cardNumber}
          cardCurrentPosition={props.squarePosition}
        />
      ) : null}
    </div>
  );
};

export default Square;
