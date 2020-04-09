import React from 'react';

import '../styles/stateitem.style.css';

const StateItem =({item})=>{
    return(
        <div className='stateItem'>

                <div className='stateItem-head'>{item.name}</div>
                <div className='group-out'>
    <div className='group-in'> <div>Ownership</div> <div className='grp-in-item'>{item.ownership}</div></div>
    <div className='group-in'> <div>Hospital Beds</div><div className='grp-in-item'>{item.hospitalBeds}</div></div>
                </div>    
        </div>
    )
}

export default StateItem;