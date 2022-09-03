import { Typography, TypographyProps } from "@mui/material";
import ButtonStack, { ButtonStackProps } from "./ButtonStack";

export type ButtonStackTypographyProps = {
  typography: TypographyProps;
};

const ButtonStackTypography = ({
  typography,
  ...rest
}: ButtonStackTypographyProps & ButtonStackProps) => {
  return (
    <>
      <Typography {...typography} />
      <ButtonStack {...rest} />
    </>
  );
};

export default ButtonStackTypography;
