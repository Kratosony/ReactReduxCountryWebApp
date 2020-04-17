import React, { Component } from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";
import { columns } from "../../Constants/TableColumns";
import { tableIcons } from "../../Assets/TableIcons";

class CountryTable extends Component {
  render() {
    const { countryData } = this.props;

    return (
      <MaterialTable
        title="Country List"
        columns={columns}
        data={countryData}
        icons={tableIcons}
      />
    );
  }
}

CountryTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default CountryTable;
