// General Imports
import { Routes, Route } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import "./App.css";


// Pages Imports
//import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomeVideo from "./pages/HomeVideo/HomeVideo";
//import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchPage from "./components/SearchPage/SearchPage";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomeVideo/>
          }
        />
        <Route path= "/search-results" element={<SearchPage/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
