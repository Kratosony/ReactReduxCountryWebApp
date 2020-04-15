import React, { Component } from "react";
import CountryList from "./CountryList/CountryList";

class Home extends Component {
  render() {
    return (
      <div>
        <div> Welcome to YoBetit Preliminary Test Homepage </div>
        <div>
          <CountryList />
        </div>
      </div>
    );
  }
}

export default Home;
