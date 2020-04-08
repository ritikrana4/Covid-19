import React from 'react';
import {Link,NavLink} from 'react-router-dom';

import home from '../assets/home.png';
import info from '../assets/info.png';
import learn from '../assets/book-open.png';
import test from '../assets/briefcase.png';
import '../styles/navbar.style.css';

const Navbar = () => {
    return(
  
            <div className='navbar'>
                <div className='navbar-box'>
                    <NavLink to='home'>
                         <div className='grp'><img src={home}/><h6>Home</h6></div></NavLink>
                     <div ><NavLink to='info'><div className='grp'><img src={info}/><h6>Info</h6></div></NavLink></div>
                     <div ><NavLink to='learn'><div className='grp'><img src={learn}/><h6>Learn</h6></div></NavLink></div>
                     <div ><NavLink to='testcenters'><div className='grp'><img src={test}/><h6>TestCenters</h6></div></NavLink></div>
                </div>
             
            </div>
    
    )
}
export default Navbar;