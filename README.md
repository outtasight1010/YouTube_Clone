# YouTube_Clone

BACKEND:
(5 points): As a developer, I want to make 10 good, consistent commits.

(5 points): As a developer, I want to create an ERD for my project that shows all models, fields, and relationships between models for the backend.

(5 points) As a developer, I want to set up the Django + React starter code and connect the backend (Django API) to my MySQL database, closely following the setup guide for instructions. 

(5 points) As a developer, I want to create a Comment model in a ‘comments’ app: 

Property names must be in snake_case and match the following exactly!
user – ForeignKey 
video_id – CharField 
text – CharField 
likes – IntegerField 
dislikes – IntegerField 

(5 points) As a developer, I want to create a Reply model in a ‘replies’ app: 

Property names must be in snake_case and match the following exactly!  

user – ForeignKey 
comment – ForeignKey 
text – CharField 

(7.5 points) As a developer, I want to create a GET endpoint that does the following things: 

Accepts a value from the request’s URL (The YouTube video id I am trying to get comments for). 
Returns a 200 status code. 
Responds with all comments from the database that are related to the video id sent in the URL. 

(5 points) As a developer, I want to create a POST endpoint that does the following things: 

Requires JWT authorization (Protected route). 
Accepts a body object from the request in the form of a Comment model. 
Adds the new comment to the database associated with the user who sent the JWT in the request. 
Returns a 201 status code.  
Responds with the newly created comment object.  

(5 points) As a developer, I want to use  Postman to test all of my endpoints and save them to a collection, and then export it as a JSON from Postman.  









FRONTEND:

Main Stories
(5 points) As a developer, I want to make at least 15  good, consistent commits.
(5 points) As a web designer, I want to create a wireframe for my application 
(5 points) As a developer, I want to use React.js best practices, which consist of creating functional components and properly passing state around as props. 
(7.5 points) As a developer, I want to use CSS appropriately to make an aesthetically pleasing application. 
(10 points) As a developer, I want to use Axios to make GET requests to the YouTube API to pull in video data. 
(5 points) As a user, I want to be able to search for YouTube videos and see a video related to my search populate my embedded video player. (API CALL #1) 
(5 points) As a user, I want to be able to play a YouTube video in the embedded video player (iframe HTML element). 
(5 points) As a user, I want to see the title and description of the currently playing video. 
(5 points) As a user, I want to see a grouping of videos related to my selected video. (API CALL #2) 
(5 points) As a user, I want to be able to select a video to be played from the list of related videos to my search. 
(7.5 points) As a registered user, I want to add a comment to a video in the comment section (Using Axios to make POST requests to my backend API). 
When comments are added to the backend for a specific video, I want to make a GET request every time that video is loaded as the currently playing video and see all comments for that video.


