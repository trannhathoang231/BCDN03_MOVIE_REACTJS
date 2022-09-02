import Header from "../templates/HomeTemplate/Layout/Header/Header";
// import Sidebar from "./components/Sidebar";
import { Route } from "react-router-dom";
import './Main.css'
import Carousel from "../pages/Home/Carousel/Carousel.js";
const MainLayout = (props) => {
  const Component = props.component;
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            <Carousel/>
            {/* <Sidebar /> */}
            {/* <Component {...propsRoute} /> */}
          </>
        );
      }}
    />
  );
};
export default MainLayout;
