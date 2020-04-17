import React from "react";
import { withStyles, Dialog } from "@material-ui/core";
import { compose } from "recompose";
import PropTypes from "prop-types";
import styles from "./Modal.styles";

class Modal extends React.PureComponent {
  render() {
    const { children, open, className, width } = this.props;
    return (
      <Dialog
        open={open}
        className={className}
        transitionDuration={0}
        maxWidth={width}
      >
        {children}
      </Dialog>
    );
  }
}

Modal.defaultProps = {
  children: "",
  className: "",
  isSubmitting: false,
  width: "xl",
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  width: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", false]),
};

export default compose(withStyles(styles))(Modal);
