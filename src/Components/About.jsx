import React from 'react';
import { Link } from "react-router-dom";


export default function About(props) {
  const text = `text-${props.mode === "dark"? "light" : "dark"}`
  const modi = `bg-${props.mode === "dark"? "secondary":"light" } `


  return (
    <>
      <div class={`about-section paddingTB60 gray-bg bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`}>
        <div class="container">
          <div class="row">
          <nav aria-label="breadcrumb" className={`${modi}  border border-${props.mode === "light"?"dark":"light"} rounded-3 p-3 mb-4 mt-4`}>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className={`breadcrumb-item ${text}`} aria-current="page">About</li>
          </ol>
        </nav>
            <div class="col-md-7 col-sm-6">
              <div class="about-title clearfix">
                <h1>About <span>Appmom</span></h1>
                <h3>Lorem ipsum dolor sit amet </h3>
                <p class="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>
                <p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>
              
              </div>
            </div>
            <div class="col-md-5 col-sm-6">
              <div class="about-img">
                <img src="https://devitems.com/preview/appmom/img/mobile/2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
