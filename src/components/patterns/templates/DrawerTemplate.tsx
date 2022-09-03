import { Container } from "@mui/material";
import { Drawer } from "../molecules";
import { Header } from "../organisms";

type DrawerTemplateProps = {
  children: JSX.Element;
  sidebar: JSX.Element;
  sidebarHeader?: JSX.Element;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
};

const DrawerTemplate = ({
  children,
  sidebar,
  sidebarHeader,
  onToggleSidebar,
  isSidebarOpen,
}: DrawerTemplateProps): JSX.Element => {
  return (
    <Drawer
      isOpen={isSidebarOpen}
      onToggle={onToggleSidebar}
      drawerComponent={sidebar}
      drawerHeaderComponent={sidebarHeader}
      mainComponent={
        <Container>
          <Header />
          <div style={styles.mainComponent}>
            <div style={styles.mainComponentInner}>{children}</div>
          </div>
        </Container>
      }
    />
  );
};
const styles = {
  mainComponent: {
    height: "calc(100vh - 100px)",
    display: "flex",
    alignItems: "center",
  },
  mainComponentInner: {
    flexGrow: 1,
  },
};
export default DrawerTemplate;
