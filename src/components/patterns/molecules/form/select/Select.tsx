import { MenuItem, MenuItemProps } from "@mui/material";
import {
  Select as SelectAtom,
  SelectProps as SelectAtomProps,
} from "components/patterns/atoms";

export type SelectProps = {
  selectProps: SelectAtomProps;
  options: MenuItemProps[];
};

const Select = ({ selectProps, options }: SelectProps): JSX.Element => {
  return (
    <SelectAtom {...selectProps}>
      {options.map((option: MenuItemProps, index) => (
        <MenuItem key={option.id || index} {...option} />
      ))}
    </SelectAtom>
  );
};

export default Select;
