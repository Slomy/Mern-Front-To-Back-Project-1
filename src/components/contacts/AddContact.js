import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({
        errors: { name: 'Name is required' }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: { email: 'Email is required' }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: { phone: 'Phone is required' }
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    axios
      .post('https://jsonplaceholder.typicode.com/users', newContact)
      .then(res =>
        dispatch({
          type: 'ADD_CONTACT',
          payload: res.data
        })
      );

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    type="text"
                    placeholder="Enter Name..."
                    name="name"
                    onChange={this.onChangeHandler}
                    value={name}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    type="email"
                    placeholder="Enter Email..."
                    name="email"
                    onChange={this.onChangeHandler}
                    value={email}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="Phone"
                    type="text"
                    placeholder="Enter Phone..."
                    name="phone"
                    onChange={this.onChangeHandler}
                    value={phone}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-outline-primary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
