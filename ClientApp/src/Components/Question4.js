import React, { Component, Fragment } from "react";
import { withStyles, Button } from "@material-ui/core";
import { compose } from "recompose";
import PropTypes from "prop-types";
import Section from "../Components/Shared/Section";
import { titles, description } from "../Constants/TitlesDescriptions";
import { commonStrings } from "../Constants/CommonStrings";
import { slotResult } from "../Constants/SlotHelpers";
import { styles } from "./Question4.styles";

class Question4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: 20,
    };
  }
  onHandleClick = () => {
    console.log(slotResult());
  };

  render() {
    const { classes } = this.props;
    const questionNumber = 4;
    return (
      <Fragment>
        <Section
          title={titles.question(questionNumber)}
          description={description(questionNumber)}
        >
          <div className={classes.content}>
            <Button
              className={classes.button}
              variant="contained"
              component="span"
              onClick={this.onHandleClick}
            >
              {commonStrings.luck}
            </Button>
          </div>
        </Section>
      </Fragment>
    );
  }
}

Question4.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default compose(withStyles(styles))(Question4);
