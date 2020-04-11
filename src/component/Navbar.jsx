import React from 'react';
import {Link, NavLink} from 'react-router-dom';


import '../styles/navbar.style.css';
import HomeIcon from '../icons/HomeIcon';
import InfoIcon from '../icons/InfoIcon'
import LearnIcon from '../icons/LearnIcon';
import TestIcon from '../icons/TestIcon';

class Navbar extends React.Component {
    render(){
      
    return(
  
            <div className='navbar'>
                <div className='navbar-box'>  
                     <div><NavLink activeStyle={{color:"#00BFFF"}} string to='/home'><div className='grp'><HomeIcon/><div className='icontext'>Home</div></div></NavLink></div>
                     <div><NavLink activeStyle={{color:"#00BFFF"}} to='/info'><div className='grp'><InfoIcon/><div className='icontext'>Info</div></div></NavLink></div>
                     <div><NavLink activeStyle={{color:"#00BFFF"}} to='/learn'><div className='grp'><LearnIcon/><div className='icontext'>Learn</div></div></NavLink></div>
                     <div><NavLink activeStyle={{color:"#00BFFF"}} to='/testcenters'><div className='grp'><TestIcon/><div className='icontext'>Test Centers</div></div></NavLink></div>
                </div>
           </div>
    )
}
}
export default Navbar;
