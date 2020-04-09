import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import StateItem from '../component/StateItem';
import '../styles/statelist.style.css'

const StateList =(props)=>{
    return(
        <div className='stateList'>
            {props.data.map(item=>(
                <StateItem key={uuidv4()} item={item}/>
            ))}
            
        </div>
    )
}

export default StateList;