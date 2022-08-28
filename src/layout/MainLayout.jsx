import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Route } from "react-router-dom";
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
            <Sidebar />
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};
export default MainLayout;
