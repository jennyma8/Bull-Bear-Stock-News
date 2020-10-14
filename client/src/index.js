import React from "react";
import ReactDOM from "react-dom";

import AppProvider from "./components/AppContext/AppContext";
import App from "./components/App/App";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
