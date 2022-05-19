import React from 'react';
import { Link } from 'react-scroll';
import Home from './Home';
import About from "./About"
import Portfolio from './Portfolio';
import Service from './Service';
import Contact from './Contact';

function Header() {
  return (
    <>
      <div className="header">
        <nav class="navbar fixed-top navbar-expand-lg ">
          <div class="container-fluid">
            <div class="collapse navbar-collapse ">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <Link to="home" smooth={true} offset={-100} duration={500} class="nav-link active" aria-current="page" >Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="about" smooth={true} offset={-100} duration={500} class="nav-link active" aria-current="page" >About</Link>
                </li>
                <li class="nav-item">
                  <Link to="portfolio" smooth={true} offset={-100} duration={500} class="nav-link active" aria-current="page" >Portfolio</Link>
                </li>
                <li class="nav-item">
                  <Link to="service" smooth={true} offset={-100} duration={500} class="nav-link active" aria-current="page" >Services</Link>
                </li>
                <li class="nav-item">
                  <Link to="contact" smooth={true} offset={-100} duration={500} class="nav-link active" aria-current="page" >Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Home />
      <About />
      <Portfolio />
      <Service />
      <Contact />

    </>
  )
}

export default Header