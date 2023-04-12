import React from 'react'
import PropTypes from 'prop-types';

  export default  function Navbar(props) {

  const styley = {
    position:'absolute',
    right:"23%",
    top:"15px",
  }

  return (
    <nav  className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.name}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.com}</a>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select color
          </a>
          <ul className="dropdown-menu">
            <li onClick={props.Admode(1)}  className="dropdown-item" >primary</li>
            <li onClick={props.Admode(2)} className="dropdown-item" >secondary</li>
            <li onClick={props.Admode(3)} className="dropdown-item" >success</li>
            <li onClick={props.Admode(4)} className="dropdown-item" >danger</li>
            <li onClick={props.Admode(5)} className="dropdown-item" >warning</li>
            <li onClick={props.Admode(6)} className="dropdown-item" >info</li>
          </ul>
        </li>
          </ul>

          <div style={styley} className="form-check form-switch">
              <input onClick={props.toggle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={props.mode === "dark"?true:false} />
                <label id="inp1" className={`text-${props.mode === "dark"? "light":"dark"}`} style={{fontSize:"13px"}} >Dark Mode</label>
            </div>
       
          <form className="d-flex" role="search">
            <input id="inp2" className={`form-control me-2 bg-${props.mode} text-${props.mode === "dark"?"light":"dark"}`} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" >Search</button>
          </form>
        </div>
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