import React, { Component } from 'react';

import ScreenReaderText from './../Common/ScreenReaderText' 

import './AppMenu.scss'

export default class AppMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  render() {
    return(
      <>
        <button className="o-app-menu-toggler" type="button" onClick={this.toggleMenu}>
          <ScreenReaderText>Toggle Menu</ScreenReaderText>
          <span className="o-app-menu-toggler__line o-app-menu-toggler__line--top" aria-hidden="true"></span>
          <span className="o-app-menu-toggler__line o-app-menu-toggler__line--middle" aria-hidden="true"></span>
          <span className="o-app-menu-toggler__line o-app-menu-toggler__line--bottom" aria-hidden="true"></span>
        </button>
        <nav className={`o-app-menu ${this.state.menuOpen ? "is-open" : ""}`}>
          I am the navigation
        </nav>
      </>
    )
  }
}