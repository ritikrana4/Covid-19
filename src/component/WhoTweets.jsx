import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const WhoTweets =({value})=>{
    
    return(
        <TwitterTimelineEmbed sourceType="url" url={`https://twitter.com/${value||"WHO"}`}  />
    )
}

export default WhoTweets;