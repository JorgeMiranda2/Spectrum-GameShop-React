import React from 'react';
import '../css/Nav.css';
import SPectrumLogo from '../images/SpectrumLogo.png';




function Nav() {

    return(
          <nav className="Nav">
           
            <a href="#"><img id='logo' src={SPectrumLogo}/></a>
            <a id='steamL' href='/index'>Spectrum</a>
            <a className='ul1' href="/store/1">STORE</a>
            <a className='ul2-1'href="/login">Login /</a>
            <a className='ul2-2'href="/register"> Register</a>
            
          </nav>  
    );
}

export default Nav;
