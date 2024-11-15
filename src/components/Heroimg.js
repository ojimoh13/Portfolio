import "./Heroimg.css";
import { Link } from "react-router-dom";
import React from 'react';

import BGimg from "../imgs/bg-wallpaper2.jpg";


const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="bg-img" src={BGimg} alt="BGimg"/>
        </div>
        <div className="content">
            <h1>Welcome to Oluwadamilare Jimoh's Portfolio</h1>
            <p>Full Stack developer</p>
            <div>
            <Link to="/project"
            className="btn">Projects</Link>
             <Link to="/contact"
            className="btn btn-light">Contact</Link>
</div>
</div>
    </div>
    );
  
};

export default Heroimg;