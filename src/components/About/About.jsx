import React from "react";
import IPL from "../../Assets/about.png";
import './about.css';

const About = () => {
  return (<>
  <div className="heading">About IPL</div>
    <div>
        <img className="brand-logo" src= {IPL} alt=""/>
       <h1 className="about-heading">Indian Premier League</h1>
       <p className="content">
      <b>Address : </b> <br />
      BCCI-IPL 4th Floor, Cricket Centre. Wankhede Stadium 'D' Road, Churchgate Mumbai - 400020 India
      </p>
      <p className="content"> <b>Contact us :</b><br />
       +91 22 22800300<br/>
        +91 22 61580300<br/>
         +91 22 22800354</p>

    
    </div>
  </>
  );
};

export default About;