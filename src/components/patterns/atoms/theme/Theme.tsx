import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ThemeConfig from "./ThemeConfig";

export type ThemeProps = {
  children: JSX.Element;
};
const Theme = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme={createTheme(ThemeConfig())}>
      <CssBaseline />
      {/* <GlobalStyle /> */}
      {children}
    </ThemeProvider>
  );
};
export default Theme;
