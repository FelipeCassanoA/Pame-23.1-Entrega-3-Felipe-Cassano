import React from "react";
import Logo from "../img/imageLogo.png";
import Barra from "../img/Barrapesquisa.png"
import "./Navbar.css"

function Navbar() {
    return (
    <div className = "navbar">
        
        <div className ="leftside">
            <img src={Logo} alt= ""/>    
            <h1>TendTudo</h1>            
        </div>
        
        <div className = "rightside">   </div>

        <div className ="barra">   </div>
            <input type="text" placeholder="Search">
            
            </input>
            <img src= {Barra} alt=""/>

    </div>
  
  )
}

export default Navbar