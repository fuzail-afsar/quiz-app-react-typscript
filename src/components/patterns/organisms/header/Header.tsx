import { MenuIconButton } from "components/patterns/atoms";
import { toggleSidebar, useAppContext } from "context";

const Header = (): JSX.Element => {
  const { dispatch } = useAppContext();
  const toggleSidebarHandler = (): void => toggleSidebar(dispatch);

  return (
    <header style={styles.header}>
      <MenuIconButton onClick={toggleSidebarHandler} />
    </header>
  );
};
const styles = {
  header: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default Header;
