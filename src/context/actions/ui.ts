import { Component } from "components/pages/home";
import { UIActionsType } from "context/reducers/ui";
import { Types } from "context/types";
import { Dispatch } from "react";

type DispatchUIActionsType = Dispatch<UIActionsType>;

export const toggleSidebar = (
  dispatch: DispatchUIActionsType,
  payload: null | boolean = null
) =>
  dispatch({
    type: Types.ToggleSidebar,
    payload,
  });

export const changeComponent = (
  dispatch: DispatchUIActionsType,
  payload: Component
) =>
  dispatch({
    type: Types.ChangeComponent,
    payload,
  });
