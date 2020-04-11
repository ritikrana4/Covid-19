import React from 'react';
import {useRouteMatch} from "react-router-dom";

const TestIcon =()=>{
 let match=useRouteMatch("/testcenters");
 return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style={{ color: match ? "#00BFFF" : "#767676" }}/>
    <path d="M16 7V3.44444C16 3.32657 15.7893 3.21352 15.4142 3.13017C15.0391 3.04683 14.5304 3 14 3H10C9.46957 3 8.96086 3.04683 8.58579 3.13017C8.21071 3.21352 8 3.32657 8 3.44444V7"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style={{ color: match ? "#00BFFF" : "#767676" }}/>
    </svg>
    
 )
}
export default TestIcon;