import { Logo } from "components/patterns/atoms";
import { MenuForm, Quiz } from "components/patterns/organisms";
import { DrawerTemplate } from "components/patterns/templates";
import { toggleSidebar, useAppContext } from "context";
import { useStartQuiz } from "./hooks";
import Result from "./Result";
import { Component } from "./type";
import Welcome from "./Welcome";

const Home = (): JSX.Element => {
  const {
    state: {
      ui: { isSidebar, component },
    },
    dispatch,
  } = useAppContext();
  const toggleSidebarHandler = (): void => toggleSidebar(dispatch);
  const [startQuiz] = useStartQuiz();

  const getComponent = () => {
    switch (component) {
      case Component.Quiz:
        return <Quiz />;
      case Component.Result:
        return <Result />;
      case Component.Welcome:
      default:
        return <Welcome />;
    }
  };

  return (
    <DrawerTemplate
      children={getComponent()}
      sidebar={<MenuForm onFormSubmit={startQuiz} />}
      sidebarHeader={<Logo sx={{ flexGrow: 1 }} />}
      onToggleSidebar={toggleSidebarHandler}
      isSidebarOpen={isSidebar}
    />
  );
};

export default Home;
