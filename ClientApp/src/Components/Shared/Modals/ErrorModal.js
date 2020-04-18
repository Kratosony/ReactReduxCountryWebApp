import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { commonStrings } from "../../../Constants/CommonStrings";
import Button from "./ModalButton";
import Modal from "./Modal";
import styles from "./CountryModal.styles";
class ErrorModal extends React.PureComponent {
  render() {
    const {
      open,
      title,
      message,
      children,
      onConfirm,
      acceptText,
      classes,
    } = this.props;
    return (
      <Modal open={open} className={classes.root}>
        <div className={classes.content}>
          {title && <div className={classes.title}>{title}</div>}
          <div className={classes.message}>{children || message}</div>
        </div>
        <Button onAccept={onConfirm} acceptText={acceptText}>
          {commonStrings.ok}
        </Button>
      </Modal>
    );
  }
}

ErrorModal.defaultProps = {
  message: "",
  title: "",
  children: null,
  onConfirm: () => {},
  acceptText: commonStrings.ok,
};

ErrorModal.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string,
  children: PropTypes.element,
  title: PropTypes.string,
  onConfirm: PropTypes.func,
  acceptText: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default compose(withStyles(styles))(ErrorModal);
