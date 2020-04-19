import React, { Component, Fragment } from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getCountryDetails,
  closeCountryModal,
  closeErrorModal,
} from "../../Store/Actions/CountryActions";
import Section from "./Section";
import CountryModal from "./Modals/CountryModal";
import ErrorModal from "./Modals/ErrorModal";
import { titles, description } from "../../Constants/TitlesDescriptions";
import { commonStrings } from "../../Constants/CommonStrings";
import { styles } from "./Question.styles";

class Question extends Component {
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

  closeCountryModal = () => {
    this.props.dispatch(closeCountryModal());
  };
  closeErrorModal = () => {
    this.props.dispatch(closeErrorModal());
  };

  render() {
    const {
      classes,
      dispatch,
      country,
      questionNumber,
      fullNameSearch,
    } = this.props;
    return (
      <Fragment>
        <CountryModal
          className={classes.modal}
          open={country.countryModal}
          onConfirm={this.closeCountryModal}
          countryData={country.countryData}
        />
        <ErrorModal
          className={classes.modal}
          open={country.errorModal}
          message={commonStrings.noResults}
          onConfirm={this.closeErrorModal}
        />
        <Section
          title={titles.question(questionNumber)}
          description={description(questionNumber)}
        >
          <div className={classes.content}>
            <TextField
              className={classes.textField}
              placeholder={commonStrings.country}
              margin="dense"
              variant="outlined"
              onChange={this.onChange}
            />
            <Button
              className={classes.button}
              variant="contained"
              component="span"
              onClick={() => {
                dispatch(
                  getCountryDetails(this.state.searchFieldText, {
                    fullNameSearch: fullNameSearch,
                  })
                );
              }}
            >
              {commonStrings.submit}
            </Button>
          </div>
        </Section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    country: state.country,
  };
};

Question.defaultProps = {
  fullNameSearch: false,
};

Question.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  fullNameSearch: PropTypes.bool,
  country: PropTypes.shape({
    countryModal: PropTypes.bool,
    errorModal: PropTypes.bool,
    countryData: PropTypes.arrayOf(
      PropTypes.shape({
        country: PropTypes.shape({
          name: PropTypes.string,
        }),
      })
    ),
  }).isRequired,
};

export default compose(withStyles(styles), connect(mapStateToProps))(Question);
