// General Imports
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import "./App.css";
import axios from 'axios'

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPageComponent from "./pages/SearchPageComponent/SearchPageComponent";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import CallRelatedVideos from "./components/RelatedVideos/RelatedVideos"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import key from './components/Keys/Keys'

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";



function App() {
  // figure out what you want yoru defualt video to be, you can copy its title and description and set them as the defualt values for the hooks below
const [currentVideoId, setCurrentVideoId] = useState("cpP-fCo8Dn4")
const [currentVideoTitle, setCurrentVideoTitle] = useState("Welcome to our backdoor Trailer park boys YouTube Clone. Where styling isn't gonna happen but functionality is on point. ")
const [currentVideoDescription, setCurrentVideoDescription] = useState("Soft Welcome to a pulsing API")

// hooks to save data from related video call
const [relatedVideos, setRelatedVideos] = useState([])

// axios call for related videos here
async function getRelatedVideos(currentVideoId){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${currentVideoId}&maxResults=5type=video&key=${key}`)
  console.log(response.data.items)
  setRelatedVideos(response.data.items)
}


// would also need make a new compoent do dispaly related videos
// we will call that compoent right under the VideoPlayer below
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
             <HomePage />
             <SearchPageComponent setCurrentVideoId={setCurrentVideoId} setCurrentVideoDescription={setCurrentVideoDescription} setCurrentVideoTitle={setCurrentVideoTitle}/>
             <VideoPlayer videoId={currentVideoId} currentVideoTitle={currentVideoTitle} currentVideoDescription={currentVideoDescription}/>
             <CallRelatedVideos  setRelatedVideos = {setRelatedVideos} relatedVideos={relatedVideos} setCurrentVideoId={setCurrentVideoId} setCurrentVideoDescription={setCurrentVideoDescription} setCurrentVideoTitle={setCurrentVideoTitle}/>
            </PrivateRoute>
          }
        />
        <Route path="/page" element={<PrivateRoute><SearchPageComponent /></PrivateRoute>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        
      </Routes>
      <div className="footer">
      <Footer />
      </div>
    </div>
  );
}


export default App;
