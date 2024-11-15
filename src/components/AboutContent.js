import { Link } from "react-router-dom";
import "./AboutContent.css";
import MyPic from "../imgs/myPhoto.jpeg";


import React from 'react'


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>WHO AM I?</h1>
            <p>Im a full stack developer. I create
                 responsive secure websites for people.</p>
                 <Link to ="/contact">
                 <button className="btn">Contact Me</button>
                 </Link>
        </div>
        

    <div className="right">
        <div className="img-container">
        <div className="img-stack top"> 
        <img src={MyPic} className="img" alt="MyPic" />
        </div>
        </div>
    </div>
    </div>
    
  )
}

export default AboutContent