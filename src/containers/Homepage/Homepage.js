import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
    onclick = () => {
        this.props.history.push('/dashboard');
    }
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <button onClick={this.onclick}>dashboard</button>
        <Link to="/dashboard">Public Page</Link>
      </div>
    )
  }
}
