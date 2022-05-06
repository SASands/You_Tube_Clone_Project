// import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "../../App.js";
// import PrivateRoute from "./utils/PrivateRoute";
import key from "../../components/Keys/Keys.js";
import axios from 'axios';
import "./SearchPageComponent.css";
import '../../components/SearchBar/SearchBar.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx';


function SearchPageComponent(props){
//Hooks
const [searchResults, setSearchResults] = useState([])

useEffect(() => {
    getSearchResults()
    
}, [])


async function getSearchResults(searchVideos= 'woodworking'){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchVideos}&type=video&maxResults=5&key=${key}`)
    console.log(response.data.items)
    setSearchResults(response.data.items)                    

}








const handleClick = (event, id, title, description) => {
    event.preventDefault();
    props.setCurrentVideoId(id)
    props.setCurrentVideoDescription(description)
    props.setCurrentVideoTitle(title)
    props.RelatedVideos(id)
}
// get related video, call getRelatedVideo in HandleClick 



//search logic

    return(
        <div className="searchResults">
        {/* Place searchBar component here */}
        <div className='SearchBar'>
        <SearchBar getSearchResults={getSearchResults}/>
        </div>
            <div className="allSearchResults">
                {searchResults.map(video =>(
                    <span>
                        <div class = "SearchResult">
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
export default SearchPageComponent;














