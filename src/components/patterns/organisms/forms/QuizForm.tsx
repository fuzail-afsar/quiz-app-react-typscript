import { Button, Typography } from "@mui/material";
import { RadioGroupForm } from "components/patterns/molecules";
import { useState } from "react";

export type QuizFormProps = {
  question: string;
  options: { label: string; value: string }[];
  onFormSubmit: (value: string) => void;
};
const QuizForm = ({ question, options, onFormSubmit }: QuizFormProps) => {
  const [value, setValue] = useState("");
  const optionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue((event.target as HTMLInputElement).value);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(value);
      }}
    >
      <RadioGroupForm
        formControl={{ sx: styles.radioGroupForm }}
        items={options}
        formLabel={{
          children: (
            <Typography color="text.primary" variant="h3" gutterBottom>
              Q. {question}
            </Typography>
          ),
        }}
        radioGroup={{
          value,
          onChange: optionChangeHandler,
          name: "question",
        }}
      />
      <Button type="submit" variant="contained" fullWidth>
        Next
      </Button>
    </form>
  );
};

const styles = {
  radioGroupForm: {
    mt: 0,
    "& .MuiFormGroup-root": {
      flexDirection: "row",
      "& > label": {
        flex: "0 0 50%",
        mx: 0,
      },
    },
  },
};

export default QuizForm;
