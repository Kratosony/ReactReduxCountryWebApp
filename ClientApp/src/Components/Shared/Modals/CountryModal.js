import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import CountrySection from "../CountrySection";
import { commonStrings } from "../../../Constants/CommonStrings";
import Button from "./ModalButton";
import Modal from "./Modal";
import styles from "./CountryModal.styles";
class CountryModal extends React.PureComponent {
  render() {
    const {
      open,
      title,
      message,
      children,
      onConfirm,
      countryData,
      acceptText,
      classes,
    } = this.props;
    const countries = countryData.map((d) => (
      <CountrySection title={d.name} description={d.capital}>
        <div className={classes.information} key={d.name}>
          {d.region}
          {d.demonym}
          {d.population}
        </div>
      </CountrySection>
    ));
    return (
      <Modal open={open} className={classes.root}>
        <div className={classes.content}>
          <div className={classes.title}>{title}</div>
          <div className={classes.message}>{children || message}</div>
          <div>{countries}</div>
        </div>
        <Button onAccept={onConfirm} acceptText={acceptText}>
          {commonStrings.ok}
        </Button>
      </Modal>
    );
  }
}

CountryModal.defaultProps = {
  message: "",
  title: "",
  children: null,
  onConfirm: () => {},
  acceptText: commonStrings.ok,
};

CountryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string,
  children: PropTypes.element,
  title: PropTypes.string,
  onConfirm: PropTypes.func,
  acceptText: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  countryData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default compose(withStyles(styles))(CountryModal);
