import react from 'react';
import './YTvideos.css';

const API = 'AIzaSyA48Og_bmU2yVzGDjrFc5pibu6EmwwJj0Y'
var fetchurl =`https://www.googleapis.com/youtube/v3/search?key=${API}`



export const YTvideos =() => {
    return(
        <div className = 'video-grid'>
            <div className = "video-card">
                <iframe width="200" height="150" src="https://www.youtube.com/embed/D_Vg4uyYwEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>    
            <div className = 'video-card'>
                <iframe width="200" height="150" src="https://www.youtube.com/embed/RC6sMFbL288?start=95" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div> 
            <div className = 'video-card'>
                <iframe width="200" height="150" src="https://www.youtube.com/embed/TBDrI9h6Bqo?start=95" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div> 
            <div className = 'video-card'>
                <iframe width="200" height="150" src="https://www.youtube.com/embed/Fm5q-PAdBjg?start=95" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>  
            <div className='video-card'>
                <iframe width="200" height="150" src="https://www.youtube.com/embed/SDe3qE_aw8Q?start=95" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}