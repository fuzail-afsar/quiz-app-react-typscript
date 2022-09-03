import { Typography } from "@mui/material";
import QuizForm from "../forms/QuizForm";
import { useQuizHook } from "./useQuizHook";

const Quiz = () => {
  const {
    question,
    options,
    currentQuestion,
    totalQuestion,
    nextClickHandler,
  } = useQuizHook();

  const formSubmitHandler = (value: string) => nextClickHandler();

  return (
    <>
      <Typography>
        {currentQuestion}/{totalQuestion}
      </Typography>
      <QuizForm
        question={question}
        options={options}
        onFormSubmit={formSubmitHandler}
      />
    </>
  );
};

export default Quiz;
