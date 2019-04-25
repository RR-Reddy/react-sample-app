import React, { Component } from "react";
import { render } from "react-dom";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

class SampleApp extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <PrimarySearchAppBar />
      </div>
    );
  }
}

export default SampleApp;
