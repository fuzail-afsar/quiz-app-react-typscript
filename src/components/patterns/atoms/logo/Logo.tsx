import { Typography, TypographyProps } from "@mui/material";

const Logo = (props: TypographyProps): JSX.Element => {
  const { children = "QUIZ", ...rest } = props;
  return (
    <Typography variant="h3" align="center" {...rest}>
      {children}
    </Typography>
  );
};

export default Logo;
