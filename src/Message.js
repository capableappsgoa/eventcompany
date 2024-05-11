import React from 'react'
import "./Message.css"
import { FaInstagram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import logo from "./images/LOGO REAL.png"
const Message = () => {
    return (
        <div className='message_container'>
            <div className="message">
                <h2>Website in Development</h2>
                <img src={logo} alt="" srcset="" />
                <h2 style={{marginTop:"10px"}}><strong>Phone : </strong> +91 9823291463</h2>
                <h2 style={{marginTop:"10px"}}><strong>Phone : </strong> +91 9823291415</h2>
                <h2 style={{marginTop:"10px"}}><strong >Address : </strong></h2>
                <h2 style={{textAlign:"center"}}>Roulo Bando, St. Agostinho, Santa Cruz, Tiswadi, Goa 403005</h2>
                
                <div className="socials">
                    <a href="https://www.instagram.com/casantevents.goa/">
                        <FaInstagram />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100063716452803'>
                        <SiFacebook />
                    </a>
                    <a href='https://wa.me/+919823291463'>
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Message