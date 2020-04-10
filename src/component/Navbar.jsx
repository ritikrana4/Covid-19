import React from 'react';
import {NavLink} from 'react-router-dom';

import home from '../assets/home.png';
import info from '../assets/info.png';
import learn from '../assets/book-open.png';
import test from '../assets/briefcase.png';
import '../styles/navbar.style.css';



const Navbar = () => {
    let i;
    return(
  
            <div className='navbar'>
                <div className='navbar-box'>
                
                     <div><NavLink activeStyle={{ color: "#00BFFF"}} to='home'><div className='grp'><img className="image" alt='home' src={home}/><h6>Home</h6></div></NavLink></div>
                     <div ><NavLink  activeStyle={{ color: "#00BFFF"}} to='info'><div className='grp'><img alt='info' src={info}/><h6>Info</h6></div></NavLink></div>
                     <div ><NavLink  activeStyle={{ color: "#00BFFF"}} to='learn'><div className='grp'><img alt='learn' src={learn}/><h6>Learn</h6></div></NavLink></div>
                     <div ><NavLink  activeStyle={{ color: "#00BFFF"}} to='testcenters'><div className='grp'><img alt='testcenters' src={test}/><h6>Test Centers</h6></div></NavLink></div>
                </div>
            
            </div>
    
    )
}
export default Navbar;