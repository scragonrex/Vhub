import React, { useEffect, useState } from 'react'

const Component4 = () => {
    const [option, setOption] = useState(1);
    const [value, setValue] = useState(<p>On a search engine of 5Mn+ influencers with 20K+ onboarded on the platform, you can easily find the influencers to reach your potential customers.</p>);

   const handleClick =(option)=>
    {
        setOption(option);
        if(option === 1)
    setValue(
        <p style={{}}>On a search engine of 5Mn+ influencers with 20K+ onboarded on the platform, you can easily find the influencers to reach your potential customers.</p>
    );
    
    if(option==2)
    setValue(
        <p>Out of the influencers that apply for your brand campaign, AI selects the best ones for you by analysing more than 1000 data points.</p>
    )
    if(option==3)
    setValue(
        <p>Intuitive and easy to use platform interface allows end to end campaign management. You can create campaigns and engage with hundreds of influencers at the same time.</p>
    )
    if(option==4)
    setValue(
        <p>Approve scripts and content created by influencers on the platform itself.</p>
    )
    if(option==5)
    setValue(
        <p>See the performance of your campaign in real time.</p>
    )
    if(option==6)
    setValue(
        <p>AI detects inorganic following and engagement from fake/bot accounts. VQS score tells you if the influencer has the genuine following so that you are sure you are engaging with the right influencers.</p>
    )
    }


  return (
    <div className='c4'>
      <div className="c4h">
        <h2 >AI Powered features of the vHub platform</h2>
        <p style={{color:"grey",color:"grey", fontSize: "1.2rem", marginTop: "1rem"}}>AI driven platform makes end to end influencer marketing easy.</p>
      </div>
      <div className="c4cont">
        <div className="c4tab">
            <ul>
                <li id='1' className={option===1?'active':''} onClick={()=>handleClick(1)}>Google for Influencer Marketing</li>
                <li id='2' className={option===2?'active':''} onClick={()=>handleClick(2)}>Partner with right talent</li>
                <li id='3' className={option==3?'active':''}onClick={()=>handleClick(3)}>CRM for campaign management</li>
                <li id='4' className={option===4?'active':''}onClick={()=>handleClick(4)}>Content Approval</li>
                <li id='5' className={option===5?'active':''}onClick={()=>handleClick(5)}>AI powered ROI dashboard</li>
                <li id='6' className={option===6?'active':''}onClick={()=>handleClick(6)}>Safeguard from Influencer Fraud.</li>
            </ul>
        </div>
        <div className="c4value">
          {value}
        </div>
      </div>
    </div>
  )
}

export default Component4
