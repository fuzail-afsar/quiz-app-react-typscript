import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButtonProps } from "./type";

const ChevronLeftIconButton = (props: IconButtonProps) => {
  return (
    <IconButton {...props}>
      <ChevronLeftIcon />
    </IconButton>
  );
};

export default ChevronLeftIconButton;
