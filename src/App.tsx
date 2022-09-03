import { Home } from "components/pages/home";
import { Theme } from "components/patterns/atoms";
import { AppProvider } from "context";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <Theme>
        <Home />
      </Theme>
    </AppProvider>
  );
};

export default App;
