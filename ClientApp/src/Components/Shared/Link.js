import React, { Component } from "react";
import { IconButton, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import PropTypes from "prop-types";
import MenuIcon from "../../Assets/Images/menu.svg";
import { Link as ReactLink } from "react-router-dom";
import { styles } from "./Link.styles";

class Link extends Component {
  render() {
    const { linkTo, name, classes } = this.props;
    return (
      <div className={classes.linkItem}>
        <IconButton className={classes.iconButton}>
          <img alt="menu" src={MenuIcon} />
        </IconButton>
        <ReactLink className={classes.linkText} to={linkTo}>
          {name}
        </ReactLink>
      </div>
    );
  }
}

Link.propTypes = {
  classes: PropTypes.object.isRequired,
  linkTo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default compose(withStyles(styles))(Link);
