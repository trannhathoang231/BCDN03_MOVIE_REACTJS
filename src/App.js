import "./styles.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ManagerMovie from "./pages/ManagerMovie";
export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <MainLayout path="/" exact component={Home} />
        <MainLayout path="/movies" exact component={ManagerMovie} />
      </Switch>
    </Router>
  );
}
