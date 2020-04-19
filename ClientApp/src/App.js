import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store";
import Home from "./Components/Home";
import Question1 from "./Components/Question1";
import Question2 from "./Components/Question2";
import Question3 from "./Components/Question3";
import Question4 from "./Components/Question4";
import Layout from "./Components/Layout";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/question1" component={Question1} />
              <Route path="/question2" component={Question2} />
              <Route path="/question3" component={Question3} />
              <Route path="/question4" component={Question4} />
            </div>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
