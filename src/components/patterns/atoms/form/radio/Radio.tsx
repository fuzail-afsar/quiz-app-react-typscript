import {
  FormControlLabel,
  FormControlLabelProps,
  Radio as RadioButton,
} from "@mui/material";

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RadioProps = PartialBy<FormControlLabelProps, "control">;

const Radio = (props: RadioProps) => {
  const { control, ...rest } = props;
  return <FormControlLabel control={control || <RadioButton />} {...rest} />;
};

export default Radio;
