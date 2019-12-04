import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Oada from "./Views/Format_viewer";
import Dropdown from "./Views/Dropdown";

class App extends Component {
  render() {
    return (
      <div>
        <Oada />
        <Dropdown />
      </div>
    );
  }
}

export default App;
if (module.hot) {
  module.hot.accept();
}
