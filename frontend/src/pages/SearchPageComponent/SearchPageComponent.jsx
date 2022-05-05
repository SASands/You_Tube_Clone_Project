// import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "../../App.js";
// import PrivateRoute from "./utils/PrivateRoute";
import key from "../../components/Keys/Keys.js";
import axios from 'axios';
import "./SearchPageComponent.css";
// import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";


function SearchPageComponent(){
//Hooks
const [searchResults, setSearchResults] = useState([])
// hook for search
const [searchVideos, setSearchVideos] = useState([])

useEffect( ()=>{
    getSearchResults()
},[])



async function getSearchResults(searchVideos= 'woodworking'){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchVideos}&type=video&maxResults=5&key=${key}`)
    console.log(response.data.items)
    setSearchResults(response.data.items)                    
    console.log(searchVideos)

}
const handleClick = (event, id, title, description) => {
event.preventDefault();

}
// add form below that is one input "search" you will need to save its on change in a hook
// this will also need a button, type submit, this means form needs on submit setup
// on submit should call getSearchResults and pass in the value from the hook string are input value

//search logic

    return(
        <div className="searchResults">
            {/* search here  */}
            <form className='SearchBar' onSubmit= {setSearchVideos}>
                <button type='submit' onClick={searchVideos}>"Search"</button>
                <input type="text" value={searchVideos} onChange={(event)=> setSearchVideos(event.target.value)}></input>
                </form>            
                <div className="allRelatedVideos">
                    {searchResults.map(video =>(
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
export default SearchPageComponent














