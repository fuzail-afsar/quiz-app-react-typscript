import { getApiQuestions } from "api/opentdb/functions";
import { AxiosError } from "axios";
import { MenuFormType } from "context/reducers/menuForm";
import { QuizActionsType } from "context/reducers/quiz";
import { Types } from "context/types";
import { Dispatch } from "react";

type DispatchQuizActionsType = Dispatch<QuizActionsType>;

export const getQuiz = async (
  dispatch: DispatchQuizActionsType,
  values: MenuFormType
) => {
  const apiArguments = { ...values };
  if (apiArguments.category === "any") delete apiArguments.category;
  if (apiArguments.difficulty === "any") delete apiArguments.difficulty;

  try {
    const payload = await getApiQuestions(apiArguments);
    // options: string[];
    // user_answer: string;
    console.log(payload);
    dispatch({
      type: Types.SetQuiz,
      payload,
    });
  } catch (error) {
    const err = error as AxiosError;
    dispatch({
      type: Types.SetQuizError,
      payload: err.message,
    });
  }
};
