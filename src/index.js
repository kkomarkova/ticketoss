import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import setUpInterceptors from "./store/services/setupInterceptors";
// import "./styles/tailwind.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

setUpInterceptors(store);