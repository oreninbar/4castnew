const randomPosition = (tempBoard, size) => {
  let rand = Math.ceil(Math.random() * size);
  let include = tempBoard.includes(rand);
  while (include) {
    rand = Math.ceil(Math.random() * size);
    include = tempBoard.includes(rand);
  }
  return rand;
};

export default randomPosition;
