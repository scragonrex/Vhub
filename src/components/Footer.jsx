import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="footers1">
        <div className="footerImg">
        <img src="https://vhub.ai/wp-content/uploads/2023/03/logo_png.png" alt="logo" />
        <p>© Copyright 2023 vHub.</p>
        <p>All rights reserved.</p>
        </div>
      </div>

      <div className="footerList">
      <div className="footers2">
        <ul>
          <li style={{fontWeight:"bold", color:"black"}}>Company</li>
          <li>About</li>
          <li>Leadership</li>
          <li>Blog</li>
          <li>Carrers</li>
          <li>Referral Program</li>
          <li>Community</li>
        </ul>
      </div>

      <div className="footers3">
      <ul>
          <li style={{fontWeight:"bold", color:"black"}}>Company</li>
          <li>Legal Notice</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Refunds Policy</li>
          <li>DMCA Policy</li>
          <li>ERDF Support</li>
        </ul>
      </div>
      </div>

      <div className="footers4">
        <p style={{fontWeight:"bold", color:"black", marginTop:" 1.5rem"}}>Company</p>
        <div className="footericons">
        <i className="fa-brands fa-2x fa-linkedin"></i>
        <i className="fa-brands fa-2x fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer;
