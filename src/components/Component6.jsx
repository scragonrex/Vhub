import React from 'react'

const Component6 = () => {
  return (
    <div className='c6'>
      <h2>About Us</h2>
      <div className="c6cont">
        <div className="c6card">
          <img style={{borderRadius:"50%", width:"100%"}}src="https://vhub.ai/wp-content/uploads/2023/03/SM.png" alt="" />
          <p style={{fontSize:"1.1rem"}}>Sachin Modi</p>
          <p style={{color:"#007fff", fontWeight:"bold"}}>Co-Founder & CEO</p>
          <p style={{color:"#818597", lineHeight:"2rem"}}>A Tech & Startup Enthusiast. Focuses on Tech & Growth.</p>
        </div>

        <div className="c6card">
          <img style={{borderRadius:"50%", width:"100%"}}src="https://vhub.ai/wp-content/uploads/2023/03/RJ.jpeg" alt="" />
          <p style={{fontSize:"1.1rem"}}>Rajesh Jagasia</p>
          <p style={{color:"#007fff", fontWeight:"bold"}}>Co-Founder</p>
          <p style={{color:"#818597", lineHeight:"2rem"}}>Meditator, Leading Business development and Product.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Component6;
