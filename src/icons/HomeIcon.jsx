import React from 'react';
import {useRouteMatch} from "react-router-dom";

const HomeIcon =()=>{
 let match=useRouteMatch("/home");
 return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"  style={{ color: match ? "#00BFFF" : "#767676" }}/>
    <path d="M9 22V12H15V22"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"  style={{ color: match ? "#00BFFF" : "#767676" }}/>
    </svg>
    
 )
}
export default HomeIcon;