import React, { Component } from "react";
import { withStyles, Paper } from "@material-ui/core";
import { compose } from "recompose";
import PropTypes from "prop-types";
import { styles } from "./Section.styles";

class CountrySection extends Component {
  render() {
    const { classes, title, description, children } = this.props;
    return (
      <Paper className={classes.root}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>
          <p>{description}</p>
        </div>
        {children}
      </Paper>
    );
  }
}

CountrySection.defaultProps = {
  children: "",
};

CountrySection.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default compose(withStyles(styles))(CountrySection);
