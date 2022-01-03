import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from "reactstrap" 
import "./Navbar.css";

const Navbar =()=>{
    return(<>
    <nav className="navbar navbar-expand-lg text-light" style={{fontFamily:"roboto",backgroundColor:"cadetblue",color:"gray"}}>
  <div className="container-fluid justify-content-end">
  <a class="navbar-brand" href="/" style={{fontFamily: 'ubuntu',color:"white",flexGrow:"1"}}><strong>G.M.V.</strong></a>
    <button className="navbar-toggler" style={{border:"2px solid black"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon icon-white" style={{color: 'white'}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{flexGrow:"0"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item text-success" >
         <Link className="nav-link active "  aria-current="page"default exact to="/">Home</Link>
        </li>
        <li className="nav-item dropdown active">
          <Link className="nav-link dropdown-toggle active" to="/faculty" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Faculties
          </Link> 
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/science">Faculty of Science</Link></li>
            <li><Link className="dropdown-item" to="/agriculture">Faculty of Agriculture</Link></li>
            <li><Link className="dropdown-item" to="/commerce">Faculty of Commerce</Link></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
          </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" exact to="/course">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" exact to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" exact to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" exact to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* <Home /> */}
    </>)
}
export default Navbar;