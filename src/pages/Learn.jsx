import React from 'react';


import doos from '../assets/doos.png';
import donts from '../assets/donts.png';

import '../styles/learnn.style.css';

const Learn =()=>{
    return(
        <div className='learn'>
                <div className='section-1'>
                    <div className='header-title'>Learn</div>
                    <div className='header-para'>What to do &amp; What Not</div>
                </div>
                
                
                <div className='section-2'>
                    <img src={doos} alt="do's image" />
                </div>
                <div className='section-3'>
                    <img src={donts} alt="dont's image" />
                </div>
        </div>
    )
}
//#FAFFF9

export default Learn;