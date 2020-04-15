import React, { Component } from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCountryDetails } from "../Store/Actions/CountryActions";
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

  render() {
    const { classes, dispatch, country } = this.props;
    return (
      <div>
        <div>Question 1</div>
        <TextField
          className={classes.textField}
          placeholder="Country Name"
          margin="dense"
          variant="outlined"
          onChange={this.onChange}
        />
        <Button
          variant="contained"
          color="primary"
          component="span"
          onClick={() => {
            dispatch(getCountryDetails(this.state.searchFieldText));
          }}
        >
          Submit
        </Button>
        {country}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.country,
  };
};

Question1.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.shape({
    country: PropTypes.string.isRequired,
  }),
};

export default compose(withStyles(styles), connect(mapStateToProps))(Question1);
