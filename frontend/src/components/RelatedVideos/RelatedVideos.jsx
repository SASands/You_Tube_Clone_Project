// import { Routes, Route } from "react-router-dom";
import React from 'react';
import "../../App.js";
// import PrivateRoute from "./utils/PrivateRoute";

//component imports 



function CallRelatedVideos(props){





// this will look just like seawrch page component handleclick
const handleClick = (event, id, title, description) => {
    event.preventDefault();
    props.setCurrentVideoId(id)
    props.setCurrentVideoDescription(description)
    props.setCurrentVideoTitle(title)
    props.setRelatedVideos(id)

}
// need to setup return and this is also were we will map over props.realtedVideos, this will also look almost the same as search page component

return(
    <div >
    {/* Place searchBar component here */}
        <div>
            {props.relatedVideos.map(video =>(
                <span>
                    <div class = "relatedVideo">
                    <input type="image" 
                            onClick={(event) => handleClick(event, video.id.videoId, video.snippet.title, video.snippet.description)}
                            src = {video.snippet.thumbnails.medium.url}
                            />
                    </div>
                </span>

            ))}
        </div>
    </div>
);



}
export default CallRelatedVideos;



