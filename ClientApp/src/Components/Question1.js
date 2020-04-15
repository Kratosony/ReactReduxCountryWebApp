import React, { Component } from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { styles } from "./Question1.styles";

class Question1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFieldText: "",
    };
  }

  onChange = (event) => {
    this.setState({
      searchFieldText: event.target.value,
    });
  };

  onHandleClick = () => {
    const { dispatch, periodId } = this.props;
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>Question 1</div>
        <TextField
          className={classes.textField}
          placeholder="Placeholder"
          margin="dense"
          variant="outlined"
          onChange={this.onChange}
        />
        <Button
          variant="contained"
          color="primary"
          component="span"
          onClick={() => this.onHandleClick()}
        >
          Submit
        </Button>
      </div>
    );
  }
}

Question1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(Question1);
