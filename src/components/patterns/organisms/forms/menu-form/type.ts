import { MenuFormType } from "context/reducers/menuForm";

export type MenuFormProps = {
  onFormSubmit: (values: MenuFormType) => void;
};

export const difficulty = {
  Any: "any",
  Easy: "easy",
  Medium: "medium",
  Hard: "hard",
};

export const categories = {
  Any: "any",
  General_Knowledge: "9",
  Entertainment_Books: "10",
  Entertainment_Film: "11",
  Entertainment_Music: "12",
  Entertainment_Musicals_And_Theatres: "13",
  Entertainment_Television: "14",
  Entertainment_Video_Games: "15",
  Entertainment_Board_Games: "16",
  Science_And_Nature: "17",
  Science_Computers: "18",
  Science_Mathematics: "19",
  Mythology: "20",
  Sports: "21",
  Geography: "22",
  History: "23",
  Politics: "24",
  Art: "25",
  Celebrities: "26",
  Animals: "27",
  Vehicles: "28",
  Entertainment_Comics: "29",
  Science_Gadgets: "30",
  Entertainment_Japanese_Anime_And_Manga: "31",
  Entertainment_Cartoon_Abd_Animations: "32",
};
