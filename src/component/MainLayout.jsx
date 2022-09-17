
import Header from "../templates/HomeTemplate/Layout/Header/Header";
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
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};
export default MainLayout;
