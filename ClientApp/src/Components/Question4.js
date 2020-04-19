import React, { Component, Fragment } from "react";
import { withStyles, Button, Paper } from "@material-ui/core";
import { compose } from "recompose";
import PropTypes from "prop-types";
import Section from "../Components/Shared/Section";
import { titles, description } from "../Constants/TitlesDescriptions";
import { commonStrings } from "../Constants/CommonStrings";
import {
  checkWinType,
  randomiseReel,
  slotReels,
  slotImage,
  notifications,
} from "../Constants/SlotHelpers";
import Coins from "../Assets/Images/coins.svg";
import { styles } from "./Question4.styles";

class Question4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: 20,
      resultantReel: [1, 1, 1],
      resultantMessage: "",
    };
  }
  onHandleClick = () => {
    const { coins, resultantMessage } = this.state;
    if (coins >= 1) {
      this.setState({
        coins: coins - 1,
      });
      this.slotResult();
    } else {
      this.setState({
        resultantMessage: notifications.noCoins,
      });
    }
  };

  handleCoinChange(result) {
    const { coins } = this.state;
    if (result !== false) {
      this.setState({
        coins: coins + result,
        resultantMessage: notifications.winningNotification(result),
      });
    } else {
      this.setState({
        resultantMessage: notifications.losingNotification,
      });
    }
  }

  slotResult() {
    var reel1Output = randomiseReel(slotReels.reel1);
    var reel2Output = randomiseReel(slotReels.reel2);
    var reel3Output = randomiseReel(slotReels.reel3);
    var result = [reel1Output, reel2Output, reel3Output];
    this.setState({
      resultantReel: result,
    });
    if (!result.every((val, i, arr) => val == arr[0])) {
      var firstPair = [reel1Output, reel2Output];
      if (!firstPair.every((val, i, arr) => val == arr[0])) {
        var secondPair = [reel2Output, reel3Output];
        if (!secondPair.every((val, i, arr) => val == arr[0])) {
          return this.handleCoinChange(false);
        } else {
          return this.handleCoinChange(checkWinType(secondPair));
        }
      } else {
        return this.handleCoinChange(checkWinType(firstPair));
      }
    } else {
      return this.handleCoinChange(checkWinType(result));
    }
  }

  render() {
    const { classes } = this.props;
    const { resultantReel, resultantMessage, coins } = this.state;
    const questionNumber = 4;
    return (
      <Fragment>
        <Section
          title={titles.question(questionNumber)}
          description={description(questionNumber)}
        >
          <div className={classes.content}>
            <div className={classes.slotReels}>
              <Paper elevation={3} className={classes.slot}>
                {slotImage(resultantReel[0])}
              </Paper>
              <Paper elevation={3} className={classes.slot}>
                {slotImage(resultantReel[1])}
              </Paper>
              <Paper elevation={3} className={classes.slot}>
                {slotImage(resultantReel[2])}
              </Paper>
            </div>
            <p className={classes.notificationBar}>{resultantMessage}</p>
            <div className={classes.coins}>
              <Paper elevation={3} className={classes.coinsContainer}>
                <img src={Coins} alt={"Coins icon"} style={{ width: 40 }} />
                <p className={classes.coinsAmount}>{coins}</p>
              </Paper>
            </div>
            <Button
              className={classes.button}
              variant="contained"
              component="span"
              onClick={this.onHandleClick}
            >
              {commonStrings.spin}
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
