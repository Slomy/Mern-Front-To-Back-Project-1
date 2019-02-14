import React, { Component } from 'react';
import Contacts from './Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
