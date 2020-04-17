import React from "react";
import { withStyles, Button, DialogActions } from "@material-ui/core";
import { compose } from "recompose";
import PropTypes from "prop-types";
import styles from "./ModalButton.styles";

class ModalButton extends React.PureComponent {
  render() {
    const {
      className,
      buttonClassName,
      acceptText,
      classes,
      onAccept,
    } = this.props;
    return (
      <DialogActions className={`${classes.actions} ${className}`}>
        <Button
          disableRipple
          className={`${classes.acceptButton} ${classes.button} ${buttonClassName}`}
          onClick={onAccept}
          color="primary"
          type="submit"
        >
          {acceptText}
        </Button>
      </DialogActions>
    );
  }
}

ModalButton.defaultProps = {
  className: "",
  buttonClassName: "",
  acceptText: "OK",
  onAccept: () => {},
};

ModalButton.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  cancelText: PropTypes.string,
  acceptText: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onAccept: PropTypes.func,
};

export default compose(withStyles(styles))(ModalButton);
