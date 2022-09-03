import { Button } from "@mui/material";
import { Text } from "components/patterns/atoms";
import { Select } from "components/patterns/molecules";
import { FormEvent } from "react";
import { useMenuForm } from "./menuFormHook";
import { categories, difficulty, MenuFormProps } from "./type";
// import { categories, difficulty, MenuFormProps } from "./type";

const difficultyOptions = Object.entries(difficulty).map(([key, value]) => ({
  children: key,
  value,
}));

const categoriesOptions = Object.entries(categories).map(([key, value]) => ({
  children: key.replace(/_/g, " "),
  value,
}));

const MenuForm = ({ onFormSubmit }: MenuFormProps): JSX.Element => {
  const [formState, formChangeHandler] = useMenuForm();
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit({ ...formState });
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <Select
        selectProps={{
          name: "category",
          label: "Select Category",
          value: formState.category,
          onChange: formChangeHandler,
        }}
        options={categoriesOptions}
      />
      <Select
        selectProps={{
          name: "difficulty",
          label: "Select Difficulty",
          value: formState.difficulty,
          onChange: formChangeHandler,
        }}
        options={difficultyOptions}
      />
      <Text
        label="Number Of Questions"
        type="number"
        name="amount"
        placeholder="10"
        value={formState.amount}
        onChange={formChangeHandler}
      />
      <Button type="submit" variant="contained" sx={styles.button} fullWidth>
        Start Quiz
      </Button>
    </form>
  );
};
const styles = {
  button: { mt: 1 },
};
export default MenuForm;
