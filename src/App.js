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
import Detail from '../src/pages/Detail/Detail.jsx'
export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>

      <HomeTemplate path="/home" exact Component={Home}/>
      <HomeTemplate path="/contact" exact Component={Contact}/>
      <HomeTemplate path="/news" exact Component={News}/>
      <HomeTemplate path="/detail/:id" exact Component={Detail}/>
      <Route path="/login" exact Component={Login}/>
      <Route path="/register" exact Component={Register}/>
      <HomeTemplate path="/" exact Component={Home}/>

      </Switch>
    </Router>
  );
}
