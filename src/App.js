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

import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import { CheckoutTemplate } from './templates/CheckoutTemplate/CheckoutTemplate';
import CheckoutTab from './pages/Checkout/Checkout';

import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Films from "./pages/Admin/Films/Films";
import AddNew from "./pages/Admin/Films/AddNew/AddNew";
import Edit from "./pages/Admin/Films/Edit/Edit";
import ShowTime from "./pages/Admin/Films/Showtime/ShowTime";
import QuanLyUser from "./pages/Admin/QuanLyUser/QuanLyUser";
import AddUser from "./pages/Admin/QuanLyUser/AddUser/AddUser";
import EditUser from "./pages/Admin/QuanLyUser/EditUser/EditUser";
import UserInfo from './pages/UserInfo/UserInfo';


export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>

      <HomeTemplate path="/home" exact Component={Home}/>
      <HomeTemplate path="/contact" exact Component={Contact}/>
      <HomeTemplate path="/news" exact Component={News}/>
      <HomeTemplate path="/detail/:id" exact Component={Detail}/>
      {/* <Route path="/login" exact Component={Login}/> */}
      {/* <Route path="/register" exact Component={Register}/> */}
      
      <CheckoutTemplate path="/checkout/:id" exact Component={CheckoutTab} />
      <UserTemplate path="/login" exact Component={Login}/>
      <UserTemplate path="/register" exact Component={Register}/>
      <UserTemplate path="/profile" exact Component={UserInfo}/>
      <HomeTemplate path="/" exact Component={Home}/>
      {/* <HomeTemplate path="/profile" exact Component={Profile}/> */}


      <AdminTemplate path="/admin" exact Component={QuanLyUser}/>

      <AdminTemplate path="/admin/users" exact Component={QuanLyUser}/>
      <AdminTemplate path="/admin/users/adduser" exact Component={AddUser}/>
      <AdminTemplate path="/admin/users/edituser/:id" exact Component={EditUser}/>


      <AdminTemplate path="/admin/films" exact Component={Films}/>
      <AdminTemplate path="/admin/films/addnew" exact Component={AddNew}/>
      <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit}/>
      <AdminTemplate path="/admin/films/showtime/:id" exact Component={ShowTime}/>

      </Switch>
    </Router>
  );
}
