import { ActionsType } from "../types";
import {
  MenuFormInitialState,
  menuFormReducer,
  MenuFormType,
} from "./menuForm";
import { QuizInitialState, quizReducer, QuizType } from "./quiz";
import { UIInitialState, uiReducer, UIType } from "./ui";

export type InitialStateType = {
  ui: UIType;
  menuForm: MenuFormType;
  quiz: QuizType;
};

export const initialState = {
  ui: UIInitialState,
  menuForm: MenuFormInitialState,
  quiz: QuizInitialState,
};

export const mainReducer = (
  { ui, menuForm, quiz }: InitialStateType,
  action: ActionsType
) => ({
  ui: uiReducer(ui, action),
  menuForm: menuFormReducer(menuForm, action),
  quiz: quizReducer(quiz, action),
});
