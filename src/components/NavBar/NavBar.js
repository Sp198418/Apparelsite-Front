import Logo from '../Logo/Logo';
import './NavBar.css';
import React from 'react';  
import {Link} from 'react-scroll'; 

// create functions here - these functions will act on the state within Home
// for example props.changeCategory()
function NavBar(props){

    const handleClick = (cat) =>{
        console.log("here")
        props.changeCategory(cat)
    }

    return (   
    <div className ="NavBar">
        <Logo/>
        <div className = 'navLinks'>
            <div onClick={() => handleClick('men')}>Men</div>
            <Link className='link' to='Women' smooth={true} >Women</Link>
            <Link className='link' to='Kids' smooth={true} >Kids</Link>
            <Link className='link' to='Accessories' smooth={true} >Accessories</Link>
            <a className='link' href='/ProductPage' >Product Page</a>
          
            
        </div>
    </div>
    )
}

export default NavBar;