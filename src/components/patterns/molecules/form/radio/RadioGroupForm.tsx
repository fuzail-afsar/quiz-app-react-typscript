import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
} from "@mui/material";
import RadioGroup, { RadioGroupProps } from "./RadioGroup";

type RadioGroupFormProps = {
  formControl?: FormControlProps;
  formLabel?: FormLabelProps;
} & RadioGroupProps;

const RadioGroupForm = ({
  formControl,
  formLabel,
  ...rest
}: RadioGroupFormProps) => {
  return (
    <FormControl fullWidth size="small" margin="normal" {...formControl}>
      {formLabel ? <FormLabel {...formLabel} /> : null}
      <RadioGroup {...rest} />
    </FormControl>
  );
};

export default RadioGroupForm;
