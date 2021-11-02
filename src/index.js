import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

reactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
