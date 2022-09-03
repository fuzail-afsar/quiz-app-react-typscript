import { Text, TextProps } from "../text";

export type SelectProps = TextProps;
const Select = (props: SelectProps): JSX.Element => {
  return <Text {...props} select={true} />;
};

export default Select;
