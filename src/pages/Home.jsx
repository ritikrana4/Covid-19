import React from 'react';
import HomeData from '../component/HomeData';
import '../styles/home.style.css';
import indiaLogo from '../assets/india-logo.png';

const Home = ()=>{
    return(
            <div>
                  <div className='home-header'>
                    <div className='home-header-title'>COVID’19 Stats</div>
                    <div className='home-header-img'><img alt='India' src={indiaLogo}/></div>
                </div>
                <HomeData />
            </div>

    )

}

export default Home;