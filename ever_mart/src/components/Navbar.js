import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import Logo from "../img/imageLogo.png";
import Barra from "../img/Barrapesquisa.png";
import "./Navbar.css";


function Navbar() {
    return (
    <div className = "navbar">
        
        <div className ="leftSide">
            <img src={Logo} alt=""/> 
            <p className="title">TendTudo </p>   
        </div>
        
        <div className = "rightSide">   
            <button> Login </button>
            <div className = "Separar"> </div>
            <button> Cadastrar</button>
        </div> 
        
        <div className='adicional'>
            <p><FontAwesomeIcon icon={faShoppingCart} /> Carrinho</p>
            <p><FontAwesomeIcon icon={faHeart} /> Seleção</p>        
        </div>

        <div className ="barra">  
            <input type="text" placeholder="Search" id="procurar" >
            </input>
            <img src= {Barra} alt="" id="lupa"/>
         </div>

    </div>
  
  )
}

export default Navbar