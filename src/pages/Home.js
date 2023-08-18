import React from 'react'
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/Home.css"
import Prof from "../assets/prof.jpg"
import Stud1 from "../assets/stud1.jpg"

function Home() {
  return (
    <div className="home">
      <img src= {Prof}/>
      <div className="about">
        <h2> Hi, My Name is Prince Jason Ferrer Bautista</h2>
        <div className="prompt"> 
          <p> A web developer student with a passion learning and creating. </p>
           <a href='https://github.com/f-pjason'><GitHubIcon /></a>
           </div>
          </div>
    </div>
  )
}

export default Home