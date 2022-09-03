import {
  categories,
  difficulty,
} from "components/patterns/organisms/forms/menu-form/type";
import { ActionMap, ActionsType, Types } from "context/types";

export type MenuFormType = {
  category?: string;
  difficulty?: string;
  amount: string;
};
export type ChangeFormFieldPayloadType =
  | { category: string }
  | { difficulty: string }
  | { amount: string };

export type MenuFormPayload = {
  [Types.ChangeFormField]: ChangeFormFieldPayloadType;
};

export type MenuFormActionsType =
  ActionMap<MenuFormPayload>[keyof ActionMap<MenuFormPayload>];

export const MenuFormInitialState = {
  category: categories.Any,
  difficulty: difficulty.Any,
  amount: "10",
};

export const menuFormReducer = (state: MenuFormType, action: ActionsType) => {
  switch (action.type) {
    case Types.ChangeFormField:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
