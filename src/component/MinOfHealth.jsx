import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const MinOfHealth =({value})=>{
    return(
        <TwitterTimelineEmbed sourceType="url" url={`https://twitter.com/${value}`}  />
    )
}

export default MinOfHealth;