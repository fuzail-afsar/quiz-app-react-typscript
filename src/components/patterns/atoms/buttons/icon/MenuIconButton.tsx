import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { IconButtonProps } from "./type";

const MenuIconButton = (props: IconButtonProps): JSX.Element => {
  return (
    <IconButton {...props}>
      <MenuIcon />
    </IconButton>
  );
};
export default MenuIconButton;
