import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import './navbar.css'
import Dashboard from "../Dashboard";
// import Dropdown from "../Dropdown";
const Navbar = () => {
    const [opne ,setOpen]=useState(false)
    
 const menuRef=useRef()
 const imgRef=useRef()
 window.addEventListener('click',(e)=>{
  if(e.target!==menuRef.current &&  imgRef.curren){
    setOpen(false)
  }
 })
  return (
    
    <header>
      <div className="logo">
        <img src="https://hometownlands.com/logos.jpg" alt="Logo" />
        <div className="logo">
       <h2>
         <span>H</span>ome
         <span>T</span>owns
         <span>L</span>ands
        
        </h2>
       
       
     </div>
      </div>
      <nav>
        <ul className="nav-container">
          <li><Link to="/home">Home</Link></li>
        
       
        <li><Link to="/home"  onClick={()=>setOpen(!opne)} ref={imgRef}>Properties <span className="logo-dropdown"> <IoMdArrowDropdown/></span></Link></li> 
        {opne &&  <div className="drop" ref={menuRef}>
          <ul className="list-items-drop">
          <li  onClick={()=>setOpen(false)}>Plots</li>
          <li  onClick={()=>setOpen(false)}>Bulidings</li>
          <li  onClick={()=>setOpen(false)}>CommercialSpaces</li>
          <li  onClick={()=>setOpen(false)}>FarmLands</li>
           
          </ul>
        </div>}
   
        
   
        
          <li><Link to="/home">Service</Link></li>
          <li><Link to="/about">Contact</Link></li>
          {/* <Dropdown/> */}
         
        </ul>
       
      </nav>
      <Dashboard/>
          
    </header>
  );
};

export default Navbar;
