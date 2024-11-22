import Footer "./footer.css";
import React from 'react'
import { FaFacebook, FaHome, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "1rem"}}/>
                    <div>
                        <p>15 London Green Court</p>
                        <p>Toronto, Canada</p>
                    </div>
                    <div className="phone">
                   <h4>
                     <FaPhone size={20} style={{color: "#fff", marginRight: "1rem"}}/>
                    647-961-5140
                    </h4>
                    </div>
                    <div className="email">
                    <h4>
                         <FaMailBulk size={20} style={{color: "#fff", marginRight: "1rem"}}/>
                    Oluwadamilarejimoh100@gmail.com
                     </h4>
                    </div>
                </div>
            </div>

            <div className="right"></div>
            <h4>
                About me
            </h4>
            <p> My name is Oluwadamilare Jimoh. CEO & Founder of Brillant Tech.
                 I enjoy doing new project and design challanges
                 </p>
            <div className="social">
                <FaFacebook size={30} 
                style={{color: "#fff", marginRight:
                "1rem"}}
                 />
                  <FaTwitter size={30} 
                style={{color: "#fff", marginRight:
                "1rem"}} 
                />
                 <FaLinkedin size={30} 
                style={{color: "#fff", marginRight:
                "1rem"}} />

            </div>
        </div>
    </div>
  )
}

export default footer