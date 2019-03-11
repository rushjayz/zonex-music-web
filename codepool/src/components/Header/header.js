import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import {Colors, Card, Input, TableWrapper, TableColumn, CardWrapper} from '../Theme';
import SpotifyWebApi from 'spotify-web-api-js';
import Tabs from '../Tabs/Tabs'

const spotifyApi = new SpotifyWebApi();

class Header extends Component {
    constructor(){
        super();
        this.state = {
            searchlistTracks: [],
            searchlistArtists: [],
            searchlistAlbums: [],
            search: ''
        }
    } 

    updateSearch =() =>{
        spotifyApi.search(this.state.search, ['track','artist','album'])
        .then((response) => {
            const searchlistTracks = response.tracks.items.map( 
                obj => ({
                    trackName: obj.name,
                    trackArtistName: obj.artists[0].name,
                    trackAlbumName: obj.album.name
                })
            )

            const searchlistArtists = response.artists.items.map( 
                obj => ({ 
                    artistName: obj.name,
                    artistImage: (obj.images[0]) ? obj.images[0].url : ''
                })
            )

            const searchlistAlbums = response.artists.items.map( 
                obj => ({
                    albumName: obj.name,
                    albumImage: (obj.images[0]) ? obj.images[0].url : ''
                })
            )

            this.setState({searchlistTracks, searchlistArtists, searchlistAlbums})
        })
    }

    render() {
        return (
            <Fragment>
                <SearchInput type="text"
                    value={this.state.search}
                    placeholder={'search'}
                    onChange={ (e)=>{ this.setState( {search:e.target.value}  ); this.updateSearch() } }/>

                <Tabs>
                    <div label="Track">
                    {this.state.searchlistTracks.map(function(searchlistTrack, index){
                        return (
                            <TableWrapper key={index} grid columns={'repeat(3,1fr)'}>
                                <TableColumn>{searchlistTrack.trackName}</TableColumn>
                                <TableColumn>{searchlistTrack.trackArtistName}</TableColumn>
                                <TableColumn>{searchlistTrack.trackAlbumName}</TableColumn>
                            </TableWrapper>
                        )}
                    )}
                    </div>
                    <div label="Artist">
                    <CardWrapper grid col_s={'repeat(2, 1fr)'} auto_flow>
                        {this.state.searchlistArtists.map(function(searchlistArtist, index){
                            return (
                                <Card round_details key={index}>
                                    <span>
                                        <img src={searchlistArtist.artistImage} alt={searchlistArtist.artistName} />
                                    </span>
                                    <p>{searchlistArtist.artistName}</p>
                                </Card>
                            )}
                        )}
                    </CardWrapper>
                    </div>
                    <div label="Albums">
                    <CardWrapper col_s={'repeat(2, 1fr)'} grid auto_flow> 
                        {this.state.searchlistAlbums.map(function(searchlistAlbum, index){
                            return (
                                <Card image_details key={index}>
                                    <span>
                                        <img src={searchlistAlbum.albumImage} alt={searchlistAlbum.albumName} />
                                    </span>
                                    <p>{searchlistAlbum.albumName}</p>
                                </Card>
                            )}
                        )}
                    </CardWrapper>
                    </div>
                </Tabs>
            </Fragment>
        );
    }
}

const SearchInput = styled(Input)`
    padding: 13px 10px;
    margin: 0 -20px;
    min-width: calc(100% + 16px);
    background-color: ${Colors.gray_light};
    border-color: ${Colors.gray_light};
    font-size: 2.2rem;
`

export default Header;