import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import setUpInterceptors from "./store/services/setupInterceptors";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

//Initialize Sentry
Sentry.init({
  dsn: "https://bf93100dbe2a424690bf5a167a13f2ad@o4504327890206720.ingest.sentry.io/4504327893745664",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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