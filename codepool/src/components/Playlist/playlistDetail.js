import React, {Component, Fragment} from 'react';
import {H2, TableWrapper, TableColumn, Input} from '../Theme';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class PlaylistsDetails extends Component {
    constructor(){
        super();
        this.state = {
            tracklist: [],
            playlistname: {
                name: ''
            },
            search: ''
        }
    } 

    // Set input value to search
    updateSearch(e) {
        this.setState({
            search: e.target.value
        })
    }
    
    // Get playlist API
    componentDidMount() {
        const { handle } = this.props.match.params

        spotifyApi.getPlaylist(`${handle}`)
        .then((response) => {
            const tracklist = response.tracks.items.map(
                obj => ({
                    trackname: obj.track.name,
                    artist: obj.track.artists[0].name,
                    album: obj.track.album.name,
                    duration: this.getTime(obj.track.duration_ms)
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

    // Returning time
    getTime = (millis) =>{
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    render() {

        // Filter tracks
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

export default PlaylistsDetails;