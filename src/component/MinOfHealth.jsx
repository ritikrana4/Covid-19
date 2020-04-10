import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const MinOfHealth =({value})=>{
    return(
        <TwitterTimelineEmbed sourceType="url" options={{
            tweetLimit: "10",
            width: "100%",
            height: "100%",           
          
          }}
         
          
          noHeader="true"
          noFooter="true" 
           url={`https://twitter.com/${value}`}  />
    )
}

export default MinOfHealth;