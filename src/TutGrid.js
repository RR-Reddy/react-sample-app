import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import "./styles.css";
import Icon from "@material-ui/core/Icon";
import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import withWidth from "@material-ui/core/withWidth";
import toRenderProps from "recompose/toRenderProps";

const styles = theme => ({
  foo: {
    ...theme.typography.button,
    backgroundColor: "#DC143C",
    padding: theme.spacing.unit * 2
  }
});

const WithWidth = toRenderProps(withWidth());

class TutGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // icons related code
    /*
    return (
      <div className="App">
        <CssBaseline />

        <Button variant="contained" color="primary">
          material button
        </Button>
        <ThreeDRotationIcon style={{ margin: "50px" }} />
        <Icon>star</Icon>

        <div className={this.props.classes.foo}>sample div ocme here</div>
        <div>sample div ocme here</div>
      </div>
    );
    */

    return (
      <div>
        <CssBaseline />

        <WithWidth>
          {({ width }) => (
            <div style={{ padding: "20px" }}>Current width: {width}</div>
          )}
        </WithWidth>

        <Paper style={{ backgroundColor: "#000000" }}>
          <Grid container justify="center" spacing={16} xs={12}>
            <Grid item style={{ backgroundColor: "#DC143C" }}>
              grid item 1
            </Grid>

            <Grid item style={{ backgroundColor: "#4286f4" }}>
              grid item 2
            </Grid>

            <Grid item style={{ backgroundColor: "#47f441" }}>
              grid item 2
            </Grid>

            <Grid item style={{ backgroundColor: "#f4ee41" }}>
              grid item 4 sample content
            </Grid>

            <Grid item style={{ backgroundColor: "#47f441" }}>
              grid item 5
            </Grid>

            <Grid item style={{ backgroundColor: "#4286f4" }}>
              grid item 6
            </Grid>

            <Grid item style={{ backgroundColor: "#4149f4" }}>
              grid item 7
            </Grid>

            <Grid item style={{ backgroundColor: "#f441a9" }}>
              grid item 8
            </Grid>

            <Grid item style={{ backgroundColor: "#8841f4" }}>
              grid item 9
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default TutGrid;
