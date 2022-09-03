import SendIcon from "@mui/icons-material/Send";
import { ButtonStackTypography } from "components/patterns/molecules";
import { toggleSidebar, useAppContext } from "context";
import { useStartQuiz } from "./hooks";

const Welcome = () => {
  const {
    state: {
      ui: { isSidebar },
    },
    dispatch,
  } = useAppContext();

  const toggleSidebarHandler = (): void => toggleSidebar(dispatch);
  const [startQuiz] = useStartQuiz();

  return (
    <ButtonStackTypography
      typography={{
        children: "Start Your Quiz Now!",
        variant: "h1",
        align: "center",
      }}
      stack="row"
      buttons={[
        {
          children: `${isSidebar ? "Close" : "Open"} Menu`,
          variant: "contained",
          onClick: toggleSidebarHandler,
        },
        {
          children: "Start Quiz",
          variant: "contained",
          endIcon: <SendIcon />,
          onClick: startQuiz,
        },
      ]}
    />
  );
};

export default Welcome;
