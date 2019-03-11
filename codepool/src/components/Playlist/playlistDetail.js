<<<<<<< HEAD
import React, {Component, Fragment} from 'react';
// import styled from 'styled-components';
import {H2, TableWrapper, TableColumn, Input} from '../Theme';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class PlaylistsDetails extends Component {
    constructor(){
        super();
        this.state = {
            // Defining Playlist array
            tracklist: [],
            playlistname: {
                name: ''
            },
            search: ''
        }
    } 

    updateSearch(e) {
        this.setState({
            search: e.target.value.substr(0,20)
        })
    }
    
    componentDidMount() {
        const { handle } = this.props.match.params

        spotifyApi.getPlaylist(`${handle}`)
        .then((response) => {
            const tracklist = response.tracks.items.map(
                obj => ({
                    trackname: obj.track.name,
                    artist: obj.track.artists[0].name,
                    album: obj.track.album.name,
                    duration: (obj.track.duration_ms/60000)
                })
            )
            
            this.setState({
                tracklist,
                playlistname: {
                    name: response.name
                }
            })
        })
        
    }

    render() {
        let filterPlaylistDetails = this.state.tracklist.filter(
            (tracklist) => {
                return tracklist.trackname.toLowerCase().indexOf(this.state.search) !== -1;
            }
        )

        return (
            <Fragment>
                <H2>{ this.state.playlistname.name }</H2>
                <Input type="text"
                    value={this.state.search}
                    placeholder={'Filter tracks'}
                    onChange={this.updateSearch.bind(this)} />      

                {filterPlaylistDetails.map(function(track, index){
                    return (
                        <TableWrapper key={index} grid columns={'repeat(4, 1fr)'}>
                            <TableColumn>{track.trackname}</TableColumn>
                            <TableColumn>{track.artist}</TableColumn>
                            <TableColumn>{track.album}</TableColumn>
                            <TableColumn>{track.duration}</TableColumn>
                        </TableWrapper>
                    )
                })}

            </Fragment>
        );
    }
}

=======
import React, {Component, Fragment} from 'react';
// import styled from 'styled-components';
import {H2, Row, Column, Input} from '../Theme';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class PlaylistsDetails extends Component {
    constructor(){
        super();
        this.state = {
            // Defining Playlist array
            tracklist: [],
            playlistname: {
                name: ''
            },
            search: ''
        }
    } 

    updateSearch(e) {
        this.setState({
            search: e.target.value.substr(0,20)
        })
    }
    
    componentDidMount() {
        const { handle } = this.props.match.params

        spotifyApi.getPlaylist(`${handle}`)
        .then((response) => {
            const tracklist = response.tracks.items.map(
                obj => ({
                    trackname: obj.track.name,
                    artist: obj.track.artists[0].name,
                    album: obj.track.album.name,
                    duration: obj.track.duration_ms
                })
            )
            
            this.setState({
                tracklist,
                playlistname: {
                    name: response.name
                }
            })
        })
        
    }

    render() {
        let filterPlaylistDetails = this.state.tracklist.filter(
            (tracklist) => {
                return tracklist.trackname.toLowerCase().indexOf(this.state.search) !== -1;
            }
        )

        return (
            <Fragment>

                <Input type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} />      

                <H2>{ this.state.playlistname.name }</H2>
                <div>
                    {filterPlaylistDetails.map(function(track, index){
                        return (
                            <Row key={index} grid columns={'repeat(3, 1fr)'}>
                                <Column>{track.trackname}</Column>
                                <Column>{track.artist}</Column>
                                <Column>{track.album}</Column>
                            </Row>
                        )
                    })}
                </div>

            </Fragment>
        );
    }
}

>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
export default PlaylistsDetails;