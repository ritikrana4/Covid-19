import React from 'react';

import '../styles/stateitem.style.css';

const StateItem =({item})=>{

    return(
        <div className='stateItem'>

                <div className='stateItem-head'>{item.name}</div>
                <div className='group-out'>
                        <div className='group-in'> <div className='grp-in-item-1'>Ownership</div> <div className='grp-in-item-2'>{item.ownership}</div></div>
                        <div className='group-in'> <div className='grp-in-item-1'>Hospital Beds</div><div className='grp-in-item-2'>{item.hospitalBeds}</div></div>
                        <div className='group-in'> <div className='grp-in-item-1'>Admission Capacity</div><div className='grp-in-item-2'>{item.admissionCapacity}</div></div>
               
                </div>    
        </div>
    )
}

export default StateItem;