// General Imports
import { Routes, Route, Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import AuthContext from "./context/AuthContext";
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
import SearchBar from "./components/SearchBar/SearchBar";
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
    const [isAuthenticated, setIsAuthenticated] = useState(false); // New state for authentication
    const [user, token] = useAuth();
    
  
    useEffect(() => {
      const fetchVideos = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`,
            {
              params: {
                key: 'AIzaSyA48Og_bmU2yVzGDjrFc5pibu6EmwwJj0Y',
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
        {/* Default route */}
        <Route
          path="/"
          element={
            <>
              <HomeVideo videos={videos} />
              {/* CommentForm displays if authenticated */}
              {isAuthenticated && <CommentForm />}
            </>
          }
        />
        <Route path="/video/:videoId" element={<VideoPlayer videos={videos} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/video-details/:videoId" element={<VideoPage videos={videos} />} />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" /> 
            ) : (
              <LoginPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;