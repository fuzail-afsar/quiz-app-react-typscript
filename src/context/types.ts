import { MenuFormActionsType } from "./reducers/menuForm";
import { QuizActionsType } from "./reducers/quiz";
import { UIActionsType } from "./reducers/ui";

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export const enum Types {
  ToggleSidebar,
  ChangeComponent,
  ChangeFormField,
  SetQuiz,
  SetQuizError,
}

export type ActionsType = UIActionsType | MenuFormActionsType | QuizActionsType;
