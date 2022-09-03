import { Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ButtonStack } from "components/patterns/molecules";

const Result = () => {
  return (
    <Paper elevation={0} sx={{ py: 3, mx: "auto", maxWidth: 620 }}>
      <Typography textAlign="center" variant="h3">
        You Scored
      </Typography>
      <Typography textAlign="center" variant="h1">
        45%
      </Typography>
      <ButtonStack
        stack="row"
        buttons={[
          { children: "Open Menu", variant: "contained" },
          {
            children: "Start Quiz Again",
            variant: "contained",
            endIcon: <SendIcon />,
          },
        ]}
      />
    </Paper>
  );
};

export default Result;
