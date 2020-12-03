import Logo from '../Logo/Logo';
import './NavBar.css';
import React from 'react';  
import {Link} from 'react-scroll'; 

function NavBar(){
    return (   
    <div className ="NavBar">
        <Logo/>
        <div className = 'navLinks'>
            <Link className='link' to='Men' smooth={true} >Men</Link>
            <Link className='link' to='Women' smooth={true} >Women</Link>
            <Link className='link' to='Kids' smooth={true} >Kids</Link>
            <Link className='link' to='Accessories' smooth={true} >Accessories</Link>
        </div>
    </div>
    )
}

export default NavBar;