import React from 'react';
import {Link,NavLink} from 'react-router-dom';

import '../styles/navbar.style.css';

const Navbar = () => {
    return(
  
            <div className='navbar'>
                <div className='navbar-box'>
                     <div ><NavLink to='home'>Home</NavLink></div>
                     <div ><NavLink to='info'>Info</NavLink></div>
                     <div ><NavLink to='learn'>Learn</NavLink></div>
                     <div ><NavLink to='testcenters'>TestCenters</NavLink></div>
                </div>
             
            </div>
    
    )
}
export default Navbar;