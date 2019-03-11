# zonex-music-web

Clone the project

# Install authentication server

Navigate to zonex-music-web/codepool/auth-server
Open your terminal and run "npm install" 

# Install App

Navigate to zonex-music-web/codepool
Open your terminal and run "npm install" 

# Running the App

In your terminal run "npm run dev-start"

# Used Libraries

- spotify-web-api-js : To connect to Spotifty
- styled-components : For styling
- concurrently : For running the Auth and App servers
- react-router-dom: For routing

# Description

When the user first go to the side the login module will redirect the user to the authenication server. When the credentials have been successful, user is directed to the home page. 

Features
 - Home will show the current users saved playlists
 - User is able to filter the playlists
 - Click on the playlist and navigate to view tracks inside the playlist
 - Filter the tracks inside the playlist

By Navigating to "Find", users are able to search tracks, artists and ablums. Search results are divided and shown in tab view.
