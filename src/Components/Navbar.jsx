
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Img from '../Img.jpg'


  export default  function Navbar(props) {
    
  const styley = {
    position:'absolute',
    right:"23%",
    top:"15px",
    cursor: "pointer"
  }

  return (
    <nav  className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} >
      <div className="container-fluid">
        <Link className="navbar-brand" to='/profile'><img src={Img} alt="avatar"
              className={`rounded-circle img-fluid bg-${props.mode==="dark"? "light" : "dark"}`} style={{width: "30px"}}/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/' >{props.title}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>{props.about}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contact'>{props.contact}</Link>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select color
          </a>
          <ul className="dropdown-menu">
            <li onClick={()=>props.Admode(1)} className="dropdown-item btn" >
              <svg height="20" width="20">
              <circle cx="10" cy="10" r="10" stroke="black" strokeWidth="1" fill="#0d6efd" />
              </svg> primary</li>
            <li onClick={()=>props.Admode(2)} className="dropdown-item btn" >
              <svg height="20" width="20">
              <circle cx="10" cy="10" r="10" stroke="black" strokeWidth="1" fill="#6c757d" />
              </svg> secondary</li>
            <li onClick={()=>props.Admode(3)} className="dropdown-item btn" >
              <svg height="20" width="20">
              <circle cx="10" cy="10" r="10" stroke="black" strokeWidth="1" fill="#198754" />
              </svg> success</li>
            <li onClick={()=>props.Admode(4)} className="dropdown-item btn" >
              <svg height="20" width="20">
              <circle cx="10" cy="10" r="10" stroke="black" strokeWidth="1" fill="#dc3545" />
              </svg> danger</li>
            <li onClick={()=>props.Admode(5)} className="dropdown-item btn" >
              <svg height="20" width="20">
              <circle cx="10" cy="10" r="10" stroke="black" strokeWidth="1" fill="#ffc107" />
              </svg> warning</li>
            <li onClick={()=>props.Admode(6)} className="dropdown-item btn" >
              <svg height="20" width="20">
              <circle cx="10" cy="10" r="10" stroke="black" strokeWidth="1" fill="#0dcaf0" />
              </svg> info</li>
          </ul>
        </li>
          </ul>

          
       
          <form className="d-flex" role="search">
            <input id="inp2" className={`form-control me-2 bg-${props.mode} text-${props.mode === "dark"?"light":"dark"}`} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" >Search</button>
          </form>
        </div>
      </div>
      <div style={styley} className="form-check form-switch">
              <input style={{cursor:"pointer"}} onClick={props.toggle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={props.mode === "dark"?true:false} />
                <label id="inp1" className={`text-${props.mode === "dark"? "light":"dark"}`} style={{fontSize:"13px"}} >Dark Mode</label>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  com: PropTypes.string
};
Navbar.defaultProps = {
  title: "kamal",
  name: "raman",
  com: "pawan"
};