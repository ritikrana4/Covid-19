import React from 'react';
import '../styles/network.style.css';

const NetworkError = () => {
    return(
            <div>
            <div className='network'>          
                <img  src='./assets/error.png'/>
                <h1>No Internet Connection</h1>
            </div>
            </div>
    );
}
export default NetworkError;