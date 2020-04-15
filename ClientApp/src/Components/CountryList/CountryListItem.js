import React, { Component } from "react";
import PropTypes from "prop-types";

class CountryListItem extends Component {
  render() {
    return (
      <div>
        <div>
          <b>{this.props.name}</b>
        </div>
      </div>
    );
  }
}

CountryListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CountryListItem;
