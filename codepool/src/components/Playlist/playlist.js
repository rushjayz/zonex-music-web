import React, {Component, Fragment} from 'react';
// import styled from 'styled-components';
import {H2, CardWrapper, Card, Input} from '../Theme';
import SpotifyWebApi from 'spotify-web-api-js';
import {NavLink} from 'react-router-dom';

const spotifyApi = new SpotifyWebApi();

class Playlists extends Component {
    constructor(){
        super();
        this.state = {
            lists: [],
            search: ''
        }
    } 

    // Set input value to search
    updateSearch(e) {
        this.setState({
            search: e.target.value
        })
    }
    
    // Get userplaylist API
    componentDidMount() {
        spotifyApi.getUserPlaylists()
        .then((response) => {
            const lists = response.items.map(
                obj => ({
                    name: obj.name,
                    cover: obj.images[0].url,
                    playlistUrl: obj.id
                })
            )

            this.setState({lists}) 
        })
    }

    render() {
        // Filter Playlists
        let filterPlaylists = this.state.lists.filter(
            (list) => {
                return list.name.toLowerCase().indexOf(this.state.search) !== -1;
            }
        )

        return (
            <Fragment>
                <H2>Playlists</H2>

                <Input type="text"
                    value={this.state.search}
                    placeholder={'Filter playlist'}
                    onChange={this.updateSearch.bind(this)} />

                <CardWrapper grid col_s={'repeat(2, 1fr)'} auto_flow>
                    {filterPlaylists.map(function(list, index){
                        return (
                        <Card image_details key={index}>
                            <NavLink to={'playlist/'+list.playlistUrl}>
                                <span><img src={list.cover} alt={list.name} /></span>
                                <p>{list.name}</p>
                            </NavLink>                   
                        </Card>
                        )}
                    )}
                </CardWrapper>
            </Fragment>
        );
    }
}

export default Playlists;