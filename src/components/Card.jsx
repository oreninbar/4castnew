import React from "react";
import "../style/card.css";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constant/Constant";
import img1 from "../assets/f35_01.jpg";
import img2 from "../assets/f35_02.jpg";
import img3 from "../assets/f35_03.jpg";
import img4 from "../assets/f35_04.jpg";

const Card = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: {
      cardNumber: props.cardNumber,
      cardCurrentPosition: props.cardCurrentPosition,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const image =
    props.cardNumber === 1
      ? img1
      : props.cardNumber === 2
      ? img2
      : props.cardNumber === 3
      ? img3
      : props.cardNumber === 4
      ? img4
      : null;


  return (
    <div
      className="img-wrapper"
      ref={drag}
      style={{
        opacity: isDragging ? 0.3 : 1,
        cursor: "move",
      }}
    >
      <img ref={drag} src={image} alt="img-card" className="card-img" />
    </div>
  );
};

export default Card;
