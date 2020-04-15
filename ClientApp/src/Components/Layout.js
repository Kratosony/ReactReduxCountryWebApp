import React, { Component } from "react";
import { Link } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>YoBetit Preliminary Test</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/question1"}>Question 1</Link>
            </li>
          </ul>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
