import React from 'react';

import '../styles/items.style.css';

const Items =({data}) => {
    
    return(
        <div className='item'>
        <h2 className='item-heading'>{data.loc}</h2>
        <div className='item-data'>
            <div > 
                <h3>Confirmed Cases</h3>
                <h5>{data.confirmedCasesIndian}</h5>
           </div>
            <div > 
                <h3 className='active'>Active</h3>
                <h5 style={{color:'#F2994A'}}>{data.confirmedCasesIndian-(data.discharged+data.deaths)}</h5>
            </div>
        </div>
        <div className='item-data'>
            <div > 
                <h3>Recovered</h3>
                <h5 style={{color:'#219653'}}>{data.discharged}</h5>
           </div>
            <div > 
                <h3>Deaths</h3>
                <h5 style={{color:'#EB5757'}}>{data.deaths}</h5>
            </div>
        </div>
    </div>
    )
}

export default Items;