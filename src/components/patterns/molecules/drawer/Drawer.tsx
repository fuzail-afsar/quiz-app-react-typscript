import { styled, Drawer as MuiDrawer, Divider, Box } from "@mui/material";
import { ChevronLeftIconButton } from "components/patterns/atoms";

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
}));

type DrawerProps = {
  isOpen: boolean;
  drawerComponent: JSX.Element;
  drawerHeaderComponent?: JSX.Element;
  mainComponent?: JSX.Element;
  onToggle: () => void;
};

const Drawer = ({
  isOpen,
  drawerComponent,
  drawerHeaderComponent,
  mainComponent,
  onToggle,
}: DrawerProps) => {
  return (
    <Box sx={styles.drawer}>
      <MuiDrawer variant="persistent" anchor="left" open={isOpen}>
        <DrawerHeader>
          {drawerHeaderComponent}
          <ChevronLeftIconButton onClick={onToggle} />
        </DrawerHeader>
        <Divider />
        <div className="drawer-component">{drawerComponent}</div>
      </MuiDrawer>
      {mainComponent ? <Main open={isOpen}>{mainComponent}</Main> : null}
    </Box>
  );
};
const styles = {
  drawer: {
    display: "flex",
    "& .MuiDrawer-root": {
      width: drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
        filter:
          "drop-shadow(0 0 1px rgba(0,0,0,.05)) drop-shadow(0 2px 4px rgba(0,0,0,.08))",
        "& .drawer-component": {
          px: 1,
          py: 2,
        },
      },
    },
  },
};
export default Drawer;
