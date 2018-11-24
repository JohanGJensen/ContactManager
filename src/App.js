import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./component/contacts/Contacts";
import Header from "./component/layout/Header";
import About from "./component/pages/About";
import NotFound from "./component/pages/NotFound";
import { Provider } from "./Context";
import AddContact from "./component/contacts/AddContact";
import EditContact from "./component/contacts/EditContact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route  exact path="/" component= {Contacts} />
                <Route  exact path="/contact/add" component= {AddContact} 
                />
                <Route exact path="/contact/edit/:id" component= {EditContact} />
                <Route  exact path="/about" component= {About} />
                <Route  component= {NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
