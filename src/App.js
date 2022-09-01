import "./styles.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ManagerMovie from "./pages/ManagerMovie";
import AddNew from "./pages/Admin/Films/AddNew/AddNew";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Films from "./pages/Admin/Films/Films";
// import Films from "./pages/Admin/Films/Films";
export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <MainLayout path="/" exact component={Home} />
        {/* <MainLayout path="/movies" exact component={ManagerMovie} />
       
        <AdminTemplate path="/admin/films" exact Component={Films}></AdminTemplate>
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew}></AdminTemplate> */}
      </Switch>
    </Router>
  );
}
