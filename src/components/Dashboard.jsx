import React, { useRef, useState } from "react";
import './dashboard.css'
const Dashboard = () => {
    const [user ,setUser]=useState(false)
    
    const userRef=useRef()
    const imguserRef=useRef()
    window.addEventListener('click',(e)=>{
     if(e.target!==userRef.current && imguserRef.curren){
        setUser(false)
     }
    })
  return (
    <div className="user-dashboard">
    <img src="https://clipground.com/images/clipart-handsome-man-2.png" alt="/"  onClick={()=>setUser(!user)} ref={imguserRef} />
    {user &&  <div className="drop-user" ref={imguserRef}>
      <div className="list-items-drop-user">
      <p className="p1"  onClick={()=>setUser(false)}>Srinivas</p>
      <p className="p2" onClick={()=>setUser(false)}>Logout</p>
      
       
      </div>
    </div>}
      </div>
  )
}

export default Dashboard