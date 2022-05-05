// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPageComponent from "./pages/SearchPageComponent/SearchPageComponent";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
             <HomePage />
             <SearchPageComponent />
             <VideoPlayer />
            </PrivateRoute>
          }
        />
        <Route path="/page" element={<PrivateRoute><SearchPageComponent /></PrivateRoute>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
