import React from 'react';
import {NavLink} from 'react-router-dom';


import '../styles/navbar.style.css';

import {ReactComponent as Home } from '../assets/home.svg';
import {ReactComponent as Info} from '../assets/info.svg';
import {ReactComponent as Learn} from '../assets/book-open.svg';
import {ReactComponent as Test} from '../assets/briefcase.svg';

class Navbar extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            isactiveHome :false,
            isactiveInfo :false,
            isactiveLearn:false,
            isactiveTest:false
        }
    }

    render(){
      
    return(
  
            <div className='navbar'>
                <div className='navbar-box'>
                   
                     
                     <div ><NavLink  activeStyle={{ color: "#00BFFF"}} to='home'><div className='grp'><Home/><div className='icontext'>Home</div></div></NavLink></div>
                     <div ><NavLink  activeStyle={{ color: "#00BFFF"}} to='info'><div className='grp'><Info/><div className='icontext'>Info</div></div></NavLink></div>
                     <div ><NavLink  activeStyle={{ color: "#00BFFF"}} to='learn'><div className='grp'><Learn/><div className='icontext'>Learn</div></div></NavLink></div>
                     <div ><NavLink  activeStyle={{ color: "#00BFFF"}} to='testcenters'><div className='grp'><Test/><div className='icontext'>Test Centers</div></div></NavLink></div>
                </div>
           </div>
    )
}
}
export default Navbar;
