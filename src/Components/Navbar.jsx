import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(props) {
  const styley = {
    position:'absolute',
    right:"23%",
    top:"14px",
    height:"20px",
    width:"20px",
    borderRadius: "36px 35px 12px 50px"
  }
  var check = 1;
  const Dark =()=>{
   if(check){
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(37, 37, 37)";
    document.getElementsByTagName("body")[0].style.color = "white"
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "rgb(37, 37, 37)";
    document.getElementById("exampleFormControlTextarea1").style.color = "white";
    document.getElementsByClassName("navbar")[0].setAttribute("data-bs-theme","dark");
    document.getElementById("DarkLight").style.backgroundColor = "white";
    check = 0;
   }
   else{
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementsByTagName("body")[0].style.color = "black"
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
    document.getElementById("exampleFormControlTextarea1").style.color = "black";
    document.getElementsByClassName("navbar")[0].setAttribute("data-bs-theme","light");
    check =1;
   }
  }

  return (
    <nav  className="navbar navbar-expand-lg ">
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
          </ul>

          <span >
            <svg onClick={Dark} id='DarkLight' style={styley}>
                  <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" id="🎨-Color"></path>
            </svg>
          </span>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
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