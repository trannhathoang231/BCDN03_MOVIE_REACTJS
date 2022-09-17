import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//Cài đặt thư viện antd
import 'antd/dist/antd.min.css'
//react slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//bootstrap 5.2.x
import 'bootstrap/dist/css/bootstrap.min.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode >
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
);
