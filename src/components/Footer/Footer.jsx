import { useRef} from "react"
import React from 'react'
import emailjs from '@emailjs/browser';
import { MdCall } from "react-icons/md";
import { IoIosMail,IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter ,FaInstagramSquare} from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";


import './footer.css'
const Footer = () => {
  const form=useRef()
  const sendEmail = (e) => {
  
      e.preventDefault();
  
      emailjs.sendForm('service_4gh00tp', 'template_lk46hit', form.current, '8_9MWeqjo6P0y_5fl')
        .then((result) => {
          alert('submitted successfully!')
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        
    };
  return (
   
    <div className="footer-section">
      <div className="footer-container">
      <div className="items-container">
        <h1>ABOUT</h1>
        <hr/>
        <p>Home</p>
        <p>Properties</p>
        <p>Servies</p>
        <p>Contact</p>
      </div>
      <div className="items-container">
        <h1>PRODUCTS</h1>
        <hr/>
        <p>Buildings</p>
        <p>Open Plots</p>
        <p>Farmlands</p>
        <p>Commercial Space</p>
      </div>
      <div className="items-container">
        <h1>INFORMATION</h1>
        <hr/>
        <p>Warangal, Telangana</p>
        <p> <MdCall size={20} /> +91 123456789</p>
        <p><IoIosMail size={20} /> hometownland@gmail.com</p> 
       
      </div >
      <div className="social-conatiner">
        <h1>KEEP IN TOUCH</h1>
        
        <div className="social-meadia">
        <FaTwitter size={30}/>
<IoLogoWhatsapp size={30}/>
<FaInstagramSquare size={30}/>
<CiFacebook  size={32}/>
        </div>
        <div className="submit-container">
       
            <form ref={form} onSubmit={sendEmail} >
           
                
                <input type="Email" placeholder=' Enter Your Email' name='user_email'   required/>
                
               
                
              <button onSubmit={sendEmail}>Submit</button>
               
              
            </form>
        </div>
      </div>
      </div>
     <div className="copy-right">
     <p>&copy; 2024 HomeTownsLands. All rights reserved.</p>
     </div>
    </div>
  );
};

export default Footer;
