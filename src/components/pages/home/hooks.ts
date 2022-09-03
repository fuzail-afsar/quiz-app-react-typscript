import {
  changeComponent,
  getQuiz,
  toggleSidebar,
  useAppContext,
} from "context";
import { Component } from "./type";

export const useStartQuiz = () => {
  const {
    state: { menuForm },
    dispatch,
  } = useAppContext();
  const startQuiz = async () => {
    await getQuiz(dispatch, menuForm);
    toggleSidebar(dispatch, false);
    changeComponent(dispatch, Component.Quiz);
  };
  return [startQuiz];
};
