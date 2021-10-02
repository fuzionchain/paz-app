import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ConnectWeb3 from "./Context/ConnectWeb3";

ReactDOM.render(
  <ConnectWeb3>
    <App />
  </ConnectWeb3>,
  document.getElementById("root")
);
