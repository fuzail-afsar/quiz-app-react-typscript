import { AxiosResponse } from "axios";
import { MenuFormType } from "context/reducers/menuForm";
import { opentdbApi } from ".";

type Quiz = {
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
};

export type QuizListType = Quiz[] | [];

type ResponseType = {
  response_code: number;
  results: Quiz[] | [];
};

export const getApiQuestions = async (values: MenuFormType) => {
  try {
    const { data }: AxiosResponse<ResponseType, MenuFormType> =
      await opentdbApi({
        params: values,
      });
    return data.results;
  } catch (error) {
    throw error;
  }
};
