import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <header class='header' id='navbar-collapse-toggle'>
          <ul class='icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1'>
            {/* Home */}
            <li class='icon-box'>
              <i class='fa fa-home'></i>
              <NavLink exact to='/' activeClassName='active'>
                <h2>Home</h2>
              </NavLink>
            </li>
            {/* About */}
            <li class='icon-box'>
              <i class='fa fa-user'></i>
              <NavLink exact to='/about' activeClassName='active'>
                <h2>About</h2>
              </NavLink>
            </li>
            {/* Sample Work */}
            <li class='icon-box'>
              <i class='fa fa-briefcase'></i>
              <NavLink exact to='/samplework' activeClassName='active'>
                <h2>Sample Work</h2>
              </NavLink>
            </li>
            {/* Contact */}
            <li class='icon-box'>
              <i class='fa fa-envelope-open'></i>
              <NavLink exact to='/contact' activeClassName='active'>
                <h2>Contact</h2>
              </NavLink>
            </li>
          </ul>
          <nav role='navigation' class='d-block d-lg-none'>
            <div id='menuToggle'>
              <input type='checkbox' />
              <span></span>
              <span></span>
              <span></span>
              <ul class='list-unstyled' id='menu'>
                <li class='active'>
                  <NavLink exact to='/'>
                    <i class='fa fa-home'></i>
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to='/about'>
                    <i class='fa fa-user'></i>
                    <span>About</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to='/sampleworks'>
                    <i class='fa fa-folder-open'></i>
                    <span>Sample Works</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to='/contact'>
                    <i class='fa fa-envelope-open'></i>
                    <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
