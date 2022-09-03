import { Button, ButtonProps, Stack, StackProps } from "@mui/material";

export type ButtonStackProps = {
  buttons: ButtonProps[];
  stack?: StackProps | "row";
};

const ButtonStack = ({ buttons, stack }: ButtonStackProps): JSX.Element => {
  if (stack === "row")
    stack = {
      direction: "row",
      justifyContent: "center",
      spacing: 2,
      sx: { mt: 2 },
    };

  return (
    <Stack {...stack}>
      {buttons.map(
        (button: ButtonProps, index): JSX.Element => (
          <Button key={button.id || index} {...button} />
        )
      )}
    </Stack>
  );
};

export default ButtonStack;
