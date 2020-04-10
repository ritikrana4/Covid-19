import React from 'react';

import TestCentersData from '../component/TestCentersData';
import '../styles/testcenters.style.css'

const TestCenters = () =>{
    return(
        <div style={{marginLeft:20, marginRight:20}}>
             <div className='test-head'>
                    <div className='header-title'>Test Centres</div>
                    <div className='header-para'>Learn about Test Centres</div>
                </div>
                <TestCentersData/>

        </div>
    )

}
export default TestCenters;