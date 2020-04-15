import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Question1 from "./Components/Question1";
import Layout from "./Components/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/question1" component={Question1} />
          </div>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
