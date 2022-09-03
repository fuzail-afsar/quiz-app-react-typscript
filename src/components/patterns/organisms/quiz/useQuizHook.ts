import { useAppContext } from "context";
import { useState } from "react";

export const useQuizHook = () => {
  const {
    state: {
      quiz: { list },
    },
  } = useAppContext();

  const [index, setIndex] = useState(0);
  const { question, correct_answer, incorrect_answers } = list[index];
  let options = [correct_answer, ...incorrect_answers].map((option) => ({
    label: option,
    value: option,
  }));
  const nextClickHandler = () => setIndex((prevIndex) => prevIndex + 1);

  return {
    question,
    options,
    currentQuestion: index + 1,
    totalQuestion: list.length,
    nextClickHandler,
  };
};
