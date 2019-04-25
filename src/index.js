import React from "react";
import ReactDOM from "react-dom";
import TutGrid from "./TutGrid";
import TutTheme from "./TutTheme";
import SampleApp from "./SampleApp";
import "typeface-roboto";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

const rootElement = document.getElementById("root");

const theme = createMuiTheme(); // customize the theme if u need
/*
// simple button
ReactDOM.render(<TutTheme />, rootElement);
*/

/*
// how button colors come from
// them colour override example --> https://material-ui.com/style/color/
function CustomTheme() {
  console.log(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <TutTheme />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<CustomTheme />, rootElement);
*/

// grid system
//ReactDOM.render(<TutGrid />, rootElement);

// sample app

ReactDOM.render(<SampleApp />, rootElement);
