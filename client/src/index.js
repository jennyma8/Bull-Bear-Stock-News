import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import AppProvider from "./components/AppContext/AppContext";
import App from "./components/App/App";
import "./i18n";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <AppProvider>
      <App />
    </AppProvider>
  </Suspense>,
  document.getElementById("root")
);
