import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./DashBoard";

import "./index.css";

const App = () => (
 <div className="container">
  <div>Name: sales-dashboard2</div>
  <div>Framework: react</div>
  <div>Language: TypeScript</div>
  <div>CSS: Empty CSS</div>
  <Dashboard />
 </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
