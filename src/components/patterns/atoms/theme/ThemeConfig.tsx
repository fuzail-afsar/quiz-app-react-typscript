// import { useTheme } from "@mui/material";

export const THEME_CONSTANTS = {
  bodyFont: "Neuzeit Grotesk",
  headingFont: "Filson Soft",
  bodyBackgroundColor: "rgb(242, 242, 242)",
};

const ThemeConfig = (): object => {
  // const theme = useTheme();
  return {
    palette: {
      background: {
        default: THEME_CONSTANTS.bodyBackgroundColor,
      },
    },
    typography: {
      fontFamily: THEME_CONSTANTS.bodyFont,
      h1: {
        fontFamily: THEME_CONSTANTS.headingFont,
        fontWeight: 700,
      },
      h2: {
        fontFamily: THEME_CONSTANTS.headingFont,
      },
      h3: {
        fontFamily: THEME_CONSTANTS.headingFont,
      },
      h4: {
        fontFamily: THEME_CONSTANTS.headingFont,
      },
      h5: {
        fontFamily: THEME_CONSTANTS.headingFont,
      },
      h6: {
        fontFamily: THEME_CONSTANTS.headingFont,
      },
    },
  };
};

export default ThemeConfig;
