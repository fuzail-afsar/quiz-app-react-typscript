import { TextField, TextFieldProps } from "@mui/material";

export type TextProps = TextFieldProps;
const Text = (props: TextProps): JSX.Element => {
  return <TextField fullWidth size="small" margin="normal" {...props} />;
};

export default Text;
