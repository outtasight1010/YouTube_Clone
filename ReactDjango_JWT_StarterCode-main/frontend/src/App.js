// General Imports
import { Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./App.css";


// Pages Imports

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomeVideo from "./components/HomeVideo/HomeVideo";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";
import SearchPage from "./components/SearchPage/SearchPage";
import VideoPage from "./components/VideoPage/VideoPage";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from "./components/CommentList/CommentList";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import HomeYT from "./pages/HomeYT/HomeYT";
import useAuth from './hooks/useAuth';






function App() {
    const [videos, setVideos] = useState([]);
    const [user, token] = useAuth();
    
  
    useEffect(() => {
      const fetchVideos = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`,
            {
              params: {
                key: 'AIzaSyCOHeaQO_PyIzcGeMyxoRBFw-BVrTBh354',
                q: 'rocky balboa',
                part: 'snippet',
                maxResults: 5,
              },
            }
          );
          setVideos(response.data.items);
        } catch (error) {
          console.error('Error fetching videos:', error);
        }
      };
  
      fetchVideos();
    }, []);



  return (
    <div>
      <Navbar />
      <SearchPage/>
      
      <Routes>
      
        <Route path="/" element={<HomeVideo videos = {videos}/>}/>
        <Route path="/video/:videoId" element={<VideoPlayer videos={videos} />}/>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/video/:videoId" element={<VideoPage videos={videos} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    
      
      <Footer />
    </div>
  );
}

export default App;
