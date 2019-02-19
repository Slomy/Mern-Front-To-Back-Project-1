import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './contacts/Contacts';
import Header from './layout/Header';

import { Provider } from '../context';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './contacts/AddContact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Test from './test/Test';
import EditContact from './contacts/EditContacts';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
