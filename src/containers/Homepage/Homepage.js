import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carosel/Carosel';
import About from '../../components/About/About';
import Product from '../../components/Product/Product';
import Team from '../../components/Team/Team';
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
        <About />
        <Product />
        <Team />
      </div>
    )
  }
}
