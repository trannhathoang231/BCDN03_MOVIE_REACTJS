import "./styles.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
// import MainLayout from "./component/MainLayout";
import Home from "./pages/Home/Home";
// import ManagerMovie from "./pages/ManagerMovie";
import {HomeTemplate} from './templates/HomeTemplate/HomeTemplate'
import Contact from './pages/Contact/Contact'
import News from './pages/News/News'
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Films from "./pages/Admin/Films/Films";
import AddNew from "./pages/Admin/Films/AddNew/AddNew";
import Edit from "./pages/Admin/Films/Edit/Edit";

export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>

      <HomeTemplate path="/home" exact Component={Home}/>
      <HomeTemplate path="/contact" exact Component={Contact}/>
      <HomeTemplate path="/news" exact Component={News}/>
      <Route path="/login" exact Component={Login}/>
      <Route path="/register" exact Component={Register}/>
      <HomeTemplate path="/" exact Component={Home}/>

      <AdminTemplate path="/admin/films" exact Component={Films}/>
      <AdminTemplate path="/admin/films/addnew" exact Component={AddNew}/>
      <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit}/>
      {/* <AdminTemplate path="/admin/films/showtimes/:id" exact Component={ShowTime}/> */}

      </Switch>
    </Router>
  );
}
