import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carosel/Carosel';
export default class Homepage extends Component {
    onclick = () => {
      if(this.props.location.pathname === '/')
        this.props.history.push('/dashboard');
      else
        this.props.history.push('/');
      }
  render() {
    return (
      <div>
        <Navbar clicked={this.onclick} path={this.props.location.pathname}/>
        <Carousel clicked={this.onclick}/>
        <h1>About</h1>
        <h1>team</h1>
        <h1>contact</h1>
        <h1>footer</h1>
        <button onClick={this.onclick}>dashboard</button>
        <Link to="/dashboard">Public Page</Link>
      </div>
    )
  }
}
