import React, { Component, Fragment } from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCountryDetails } from "../Store/Actions/CountryActions";
import Section from "./Shared/Section";
import CountryModal from "./Shared/Modals/CountryModal";
import { titles } from "../Constants/TitlesDescriptions";
import { commonStrings } from "../Constants/CommonStrings";
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
      <Fragment>
        <CountryModal
          open={country.countryModal}
          title={"Result"}
          onConfirm={this.onDuplicateUploadConfirm}
          countryData={country.countryData}
        />
        <Section
          title={titles.question("1")}
          description={titles.descriptionQ1}
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
                dispatch(getCountryDetails(this.state.searchFieldText));
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

Question1.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  country: PropTypes.shape({
    countryModal: PropTypes.bool,
    countryData: PropTypes.arrayOf(
      PropTypes.shape({
        country: PropTypes.shape({
          name: PropTypes.string,
        }),
      })
    ),
  }).isRequired,
};

export default compose(withStyles(styles), connect(mapStateToProps))(Question1);
