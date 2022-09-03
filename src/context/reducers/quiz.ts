import { QuizListType } from "api/opentdb/functions";
import { ActionMap, ActionsType, Types } from "../types";

export type QuizType = {
  list: QuizListType;
  error: string;
};

type QuizPayload = {
  [Types.SetQuiz]: QuizListType;
  [Types.SetQuizError]: string;
};

export type QuizActionsType =
  ActionMap<QuizPayload>[keyof ActionMap<QuizPayload>];

export const QuizInitialState = {
  list: [],
  error: "",
};

export const quizReducer = (state: QuizType, action: ActionsType) => {
  switch (action.type) {
    case Types.SetQuiz:
      return { ...state, list: action.payload };
    case Types.SetQuizError:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
