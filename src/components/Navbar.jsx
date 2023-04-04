import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='navbarCont'>
        <div className="logo">
          <img src="https://vhub.ai/wp-content/uploads/2023/03/logo_png.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li><a href="#">Why vhub</a></li>
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
      </div>
    </div>
  )
}

export default Navbar
