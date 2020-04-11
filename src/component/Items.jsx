import React from 'react';

import '../styles/items.style.css';

const Items =({data}) => {
    
    return(
        <div className='item'>
        <div className='item-heading'>{data.loc}</div>
        <div className='item-data-grp'>
        <div className='item-data-1'>
            <div > 
                <div className='item-data-heading'>Confirmed Cases</div>
                <div className='item-data-digit'>{data.confirmedCasesIndian}</div>
           </div>
           <div > 
                <div className='item-data-heading'>Recovered</div>
                <div  className='item-data-digit' style={{color:'#219653'}}>{data.discharged}</div>
           </div>
           
        </div>
        <div className='item-data-2'>
        <div > 
                <div className='item-data-heading' >Active</div>
                <div className='item-data-digit' style={{color:'#F2994A'}}>{data.confirmedCasesIndian-(data.discharged+data.deaths)}</div>
            </div>
            <div > 
                <div className='item-data-heading'>Deaths</div>
                <div  className='item-data-digit' style={{color:'#EB5757'}}>{data.deaths}</div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Items;