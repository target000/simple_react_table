import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./table";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Table />
      </MuiThemeProvider>
    );
  }
}

export default App;
