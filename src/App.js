import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import {GlobalStyle, Device} from './components/Theme/';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import Playlists from './components/Playlist/playlist';
import PlaylistsDetails from './components/Playlist/playlistDetail';
import Login from './components/Login/login'; 
import SpotifyWebApi from 'spotify-web-api-js';
import {Route, BrowserRouter} from 'react-router-dom';

const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    /* Loggin data is passed to a true or false */
    this.state = {
      loggedIn: token ? true : false,
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams; 
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
          <GlobalStyle/>
          <BodyWrapper>
              {/* If loggin */}
              { this.state.loggedIn &&
                <Fragment>
                    <Sidebar/>

                    <Route exact path="/" component={Playlists} />
                    <Route exact path="/search" component={Header} />
                    <Route exact path="/playlist/:handle" component={PlaylistsDetails} />
                </Fragment>  
              }

              {/* If not Logged in */}
              {!this.state.loggedIn &&
                <Login/>
              }  
              
            </BodyWrapper>           
        </div>
      </BrowserRouter>
    );
  }
}

const BodyWrapper = styled.main`
  padding: 0 20px 0 80px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;


  @media ${Device.tablet} {
    padding-left: 220px;
  }
`

export default App;
