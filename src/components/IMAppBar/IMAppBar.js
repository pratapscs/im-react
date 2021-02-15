import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Hidden, makeStyles, Box } from "@material-ui/core";
import PropTypes from "prop-types";

const IMAppBar = (props) => {
  const useStyles = makeStyles((theme) => ({
    appBarBottom: {
      background: props.background,
      color: props.color,
      top: "auto",
      bottom: 0
    },
    appBarLeft: {
      background: props.background,
      color: props.color,
      width: props.width,
      height: "100vh",
      left: 0,
      padding: "0px"
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <Hidden mdDown>
        <AppBar position="fixed" color="primary" className={classes.appBarLeft} >
          <Box display = "flex" flexDirection = "column" justifyContent="center" alignItems="center">
            {props.children}
          </Box>
        </AppBar>
      </Hidden>

      <Hidden lgUp>
        <AppBar
          position="fixed"
          color="primary"
          className={classes.appBarBottom}
        >
          <Box display = "flex" flexDirection = "row" justifyContent="center">
            {props.children}
          </Box>
        </AppBar>
      </Hidden>
    </React.Fragment>
  );
};

IMAppBar.defaultProps = {
  background: "rgb(48, 70, 105)",
  color: "rgb(255, 255, 255)",
  width: "75px",
  height: "10vh"
};

IMAppBar.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default IMAppBar;
