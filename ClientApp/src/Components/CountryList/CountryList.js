import React, { Component } from "react";
import CountryListItem from "./CountryListItem";

class CountryList extends Component {
  render() {
    return (
      <div>
        <div> Countrie </div>
        <ul>
          <li>
            <CountryListItem id="1" name="Vietnam" />
          </li>
          <li>
            <CountryListItem id="2" name="Sweden" />
          </li>
        </ul>
      </div>
    );
  }
}

export default CountryList;
