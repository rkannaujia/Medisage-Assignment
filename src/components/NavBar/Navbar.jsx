import React from 'react'
import logo from '../../Assets/logo.png'
import {Link} from 'react-router-dom';
import './navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar  navbar-expand-lg ">
  <div className="container-fluid" >
    <img className='navbar-brand' src= {logo} alt="" style={{height: "47.5px", width: "90px"}}/>
    {/* <a className="navbar-brand" href="/">IPL T20</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto justify-content-evenly w-25">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
     
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Teams
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> 
            <li><Link className="dropdown-item item" to="/players/KKR">KKR</Link></li>
            <li><Link className="dropdown-item item" to="/players/CSK">CSK</Link></li>
            <li><Link className="dropdown-item item" to="/players/GT">GT</Link></li>
            <li><Link className="dropdown-item item" to="/players/LSG">LSG</Link></li>
            <li><Link className="dropdown-item item" to="/players/MI">MI</Link></li>
            <li><Link className="dropdown-item item" to="/players/DC">DC</Link></li>
            <li><Link className="dropdown-item item" to="/players/PBKS">PBKS</Link></li>
            <li><Link className="dropdown-item item" to="/players/SRH">SRH</Link></li>
            <li><Link className="dropdown-item item" to="/players/RR">RR</Link></li>
            <li><Link className="dropdown-item item" to="/players/RCB">RCB</Link></li>
            
          </ul>
          </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/schedule">Schedule</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">About</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar