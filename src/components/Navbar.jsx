/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
const Navbar = () => {

  const handleClose = ()=>{
    const element = document.getElementById('sidebar');
    const opa = document.getElementById('opacity'); 
    console.log(element);
    element.style.width='0rem';
    opa.style.width='0svw'
  }

  const handleOpen = ()=>{
    const element = document.getElementById('sidebar');
    const opa = document.getElementById('opacity'); 
    opa.style.width='100vw'
      element.style.width='50svw';
  }
  return (
    <div className="navbar">
      <div id='opacity' className="opacity"></div>
      <div id='sidebar' className="sidebar">
        <div className="closeIcon">
        <i onClick={handleClose} class="fa-regular fa-2x fa-rectangle-xmark"></i>
        </div>
          <ul>
          <li><a href="#c3">Why vhub</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Solution</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
      </div>
      <div className='navbarCont'>
        <div className="logo">
          <img src="https://vhub.ai/wp-content/uploads/2023/03/logo_png.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li><a href="#c3">Why vhub</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Solution</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>
        <div className="btnGroup">
          <button className='btn btnLogin'>Login</button>
          <button className='btn'>Book a demo</button>
        </div>
        <div className="menuIcon">
        <i onClick={handleOpen} className="fa-solid fa-2x fa-bars"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
