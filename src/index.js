import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ConnectWeb3 from "./contexts/ConnectWeb3";

ReactDOM.render(
  <ConnectWeb3>
    <App />
  </ConnectWeb3>,
  document.getElementById("root")
);
