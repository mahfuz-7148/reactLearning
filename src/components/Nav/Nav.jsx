import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav class="navbar">
    <div class="container">
  
      <div class="navbar-header">
        <button class="navbar-toggler" data-toggle="open-navbar1">
        </button>
        <a href="#">
          <h4>Shanto<span>React</span></h4>
        </a>
      </div>
  
      <div class="navbar-menu" id="open-navbar1">
        <ul class="navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>            
  )
}

export default Nav