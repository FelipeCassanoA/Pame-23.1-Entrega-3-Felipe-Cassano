import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTh } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import Logo from "../img/imageLogo.png";
import Barra from "../img/Barrapesquisa.png";
import "./Navbar.css";


function Navbar() {

    const [mostrarLista, setMostrarLista] = useState(false);

    const toggleLista = () => {
    setMostrarLista(!mostrarLista);
  };
    
    return (
    <div className = "navbar">
        
        <div className="produtos">
        <p onClick={toggleLista}>
          <FontAwesomeIcon icon={faTh} />Produtos
        </p>
        {mostrarLista && (
          <ul className='fundo'>
            <li>Todos os produtos</li>
            <br/>
            <li>Eletrônicos</li>
            <br/>  
            <li>Acessórios Masculinos</li>
            <br/>
            <li>Acessórios Femininos</li>
            <br/>
            <li>R</li>
          </ul>
        )}
      </div>



        <div className ="leftSide">
            <img src={Logo} alt=""/> 
            <p className="title">TendTudo </p>   
            <p></p>
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