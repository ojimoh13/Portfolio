import "./WorkCard.css";
import { NavLink } from "react-router-dom";


import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="Project One"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
            <NavLink to="{props.view}"
            className="btn">View</NavLink>

            <NavLink to="url.com"
            className="btn">Source</NavLink>
            </div>
            </div>
        </div>
   
  )
}

export default WorkCard