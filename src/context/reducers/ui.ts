import { Component } from "components/pages/home";
import { ActionMap, ActionsType, Types } from "../types";

export type UIType = {
  isSidebar: boolean;
  component: Component;
};

type UIPayload = {
  [Types.ToggleSidebar]: boolean | null;
  [Types.ChangeComponent]: Component;
};

export type UIActionsType = ActionMap<UIPayload>[keyof ActionMap<UIPayload>];

export const UIInitialState = {
  isSidebar: true,
  component: Component.Welcome,
};

export const uiReducer = (state: UIType, action: ActionsType) => {
  switch (action.type) {
    case Types.ToggleSidebar:
      return { ...state, isSidebar: action.payload ?? !state.isSidebar };
    case Types.ChangeComponent:
      return { ...state, component: action.payload };
    default:
      return state;
  }
};
