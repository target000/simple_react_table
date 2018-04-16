import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//import { pink400 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// Component imports
import Table from "./table";
import FlatButtonExampleComplex from "./button";
import AppBarExampleIcon from "./AppBar";
import BottomNavigationExampleSimple from "./BottomNavigation";
import CardExampleWithAvatar from "./Card";
// const muiTheme = getMuiTheme({
//   palette: {
//     textColor: pink400
//   },
//   appBar: {
//     height: 50
//   }
// });

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <CardExampleWithAvatar />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <AppBarExampleIcon />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Table />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <BottomNavigationExampleSimple />
        </MuiThemeProvider>
      </div>
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
