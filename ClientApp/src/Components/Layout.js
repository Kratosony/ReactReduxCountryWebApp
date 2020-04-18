import React, { Component } from "react";
import { Drawer, withTheme, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import PropTypes from "prop-types";
import Link from "./Shared/Link";
import styles from "./Layout.styles";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.linksContainer}>
            <Link linkTo={"/"} name={"Home"}></Link>
            <Link linkTo={"/question1"} name={"Question 1"}></Link>
          </div>
        </Drawer>
        <div className={classes.content}>{this.props.children}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(Layout);
