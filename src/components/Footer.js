import React from 'react'
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"
import Phinma from "../assets/phinma.png"

function Footer() {
  return (
    <div className="footer"> 
        <div className="socialMedia"> 
            <img src={Phinma}/>
            </div>
        <h1> Phinma University of Pangasinan </h1>
        <h3> College of Information Technology</h3>
    </div>
  )
}

export default Footer