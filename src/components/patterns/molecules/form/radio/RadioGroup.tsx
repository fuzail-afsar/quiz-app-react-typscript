import {
  RadioGroup as RadioGroupMui,
  RadioGroupProps as RadioGroupMuiProps,
} from "@mui/material";
import { Radio, RadioProps } from "components/patterns/atoms";

export type RadioGroupProps = {
  radioGroup?: RadioGroupMuiProps;
  items: RadioProps[];
};
const RadioGroup = ({ radioGroup, items }: RadioGroupProps) => {
  return (
    <RadioGroupMui {...radioGroup}>
      {items.map(
        (item: RadioProps, index): JSX.Element => (
          <Radio key={item.id || index} {...item} />
        )
      )}
    </RadioGroupMui>
  );
};

export default RadioGroup;
