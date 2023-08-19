// General Imports
import { Routes, Route } from "react-router-dom";
//import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css";


// Pages Imports
//import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomeVideo from "./components/HomeVideo/HomeVideo";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
//import SearchBar from "./components/SearchBar/SearchBar";
import SearchPage from "./components/SearchPage/SearchPage";
//import VideoPage from "./components/VideoPlayer/VideoPlayer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";




function App() {
  return (
    <div>
      <Navbar />
      <SearchPage/>
      <Routes>
        <Route
          path="/"
          element={
            <HomeVideo/>
          }
        />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
