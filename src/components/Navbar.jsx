import React from 'react';

const Navbar = () => (
  <header className="topnav container-fluid" id="myTopnav">
    <a className="active" id="top">top</a>
    <a id="about">about</a>
    <a id="projects">projects</a>
    <a id="contact">contact</a>
    <a href="javascript:void(0);" className="icon" id="bars-icon">
      <div className="bars-container">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </a>
  </header>
)

export default Navbar;