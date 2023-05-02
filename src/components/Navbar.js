import React from 'react'
import footerImg from "../assets/images/footer/Vector.png";
import Button from 'react-bootstrap/Button';
const Navbar = () => {
  return (

<div className='Navbar col-md-12'>
    <div className='container'>
<nav className="navbar navbar-expand-lg ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand d-flex justify-content-start align-items-center" href="#">
      <img src={footerImg} alt="footer image" />
      <p className='logocon'>Top Haven</p></a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Buy</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sell</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Rent</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Manage property</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Resources</a>
      </li>
    </ul>
  </div>

  <div className='Navbar-log-regi'>
      <Button variant="outline-info">Login</Button>&nbsp;&nbsp;&nbsp;
      <Button variant="primary">Register</Button> 
  </div>
</nav>
</div>
</div>
  )
}

export default Navbar