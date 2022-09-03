import {
  ChangeFormFieldPayloadType,
  MenuFormActionsType,
} from "context/reducers/menuForm";
import { Types } from "context/types";
import { Dispatch } from "react";

type DispatchMenuFormActionsType = Dispatch<MenuFormActionsType>;

export const changeFormField = (
  dispatch: DispatchMenuFormActionsType,
  payload: ChangeFormFieldPayloadType
) =>
  dispatch({
    type: Types.ChangeFormField,
    payload,
  });
