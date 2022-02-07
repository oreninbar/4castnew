import part1 from "../assets/f35_01.jpg";
import part2 from "../assets/f35_02.jpg";
import part3 from "../assets/f35_03.jpg";
import part4 from "../assets/f35_04.jpg";

const appQuestions = [
  {
    title: "שאלה אמריקאית",
    type: "AMERICAN",
    question: "השחקן המרכזי בסדרה פאודה",
    answerOptions: ["דני דין", "ליאור רז", "יום טוב סמיה", "האלק הוגאן"],
    questionSolution: "ליאור רז",
    id: 1,
  },
  {
    title: "שאלת השלמה",
    type: "COMPLETION",
    question: "לכובע שלי שלוש ",
    questionSolution: "פינות",
    id: 2
  },
  {
    title: "שאלת גרירה",
    type: "TOWING",
    question: [
      {
        id: 1,
        picture: part1,
      },
      {
        id: 2,
        picture: part2,
      },
      {
        id: 3,
        picture: part3,
      },
      {
        id: 4,
        picture: part4,
      },
    ],
    questionSolution: [1, 2, 3, 4],
    id : 3,
  },
];

export default appQuestions;
