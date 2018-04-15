import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./table";
import FlatButtonExampleComplex from "./button";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Table />
        <FlatButtonExampleComplex />
      </MuiThemeProvider>
    );
  }
}
export default App;

// simplied way of doing it
// export default () => (
//   <MuiThemeProvider>
//     <Table />
//     <FlatButtonExampleComplex />
//   </MuiThemeProvider>
// );
