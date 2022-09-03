import { changeFormField, useAppContext } from "context";
import {
  ChangeFormFieldPayloadType,
  MenuFormType,
} from "context/reducers/menuForm";
import { ChangeEvent } from "react";

export const useMenuForm = (): [MenuFormType, typeof formChangeHandler] => {
  const {
    state: { menuForm },
    dispatch,
  } = useAppContext();
  const formChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;

    changeFormField(dispatch, {
      [name]: value,
    } as ChangeFormFieldPayloadType);
  };
  return [menuForm, formChangeHandler];
};
