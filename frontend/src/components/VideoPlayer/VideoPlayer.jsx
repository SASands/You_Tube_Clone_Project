import React from 'react';
import SearchPageComponent from '../../pages/SearchPageComponent/SearchPageComponent';

const VideoPlayer = (props) => {
    return(
        <div className='VideoPlayer'>
            <p>{props.currentVideoTitle}</p>
        <iframe width="560" height="315" 
        src={`https://www.youtube.com/embed/${props.videoId}`}
    title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe> 
        <p>{props.currentVideoDescription}</p>
        </div>
       

)}
        
export default VideoPlayer;
        
        
        
        
        
        
        
        
        
        
        //         <iframe id='ytplayer' type='text/html' width='640' height='360'
        //   src="https://www.youtube.com/embed/bp5qlPE_kv8?autoplay=1&origin=http://example.com"
        //   frameborder='0'></iframe>
