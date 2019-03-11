import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import {Colors, Card, Input, TableWrapper, TableColumn, CardWrapper} from '../Theme';
import SpotifyWebApi from 'spotify-web-api-js';
import Tabs from '../Tabs/Tabs';
import {NavLink} from 'react-router-dom';

const spotifyApi = new SpotifyWebApi();

class Header extends Component {
    /* Three arrays are defined here for Tracks, Albums and Artist search results */
    constructor(){
        super();
        this.state = {
            searchlistTracks: [],
            searchlistArtists: [],
            searchlistAlbums: [],
            search: ''
        }
    } 

    /*  Search API 
        On each onchange the data will be sent/retrieved for Tracks, Artist and Albums. Those 3 are passed as API
        arguments. Each are taken individually and set to there arrays to retrieve data */
    updateSearch =() =>{
        spotifyApi.search(this.state.search, ['track','artist','album'])
        .then((response) => {

            // Get track list
            const searchlistTracks = response.tracks.items.map( 
                obj => ({
                    trackName: obj.name,
                    trackArtistName: obj.artists[0].name,
                    trackAlbumName: obj.album.name,
                    trackUrl: obj.external_urls.spotify
                })
            )

            // Get artist list
            const searchlistArtists = response.artists.items.map( 
                obj => ({ 
                    artistName: obj.name,
                    artistImage: (obj.images[0]) ? obj.images[0].url : 'https://via.placeholder.com/300',
                    artistUrl: obj.external_urls.spotify
                })
            )

            // Get Album list
            const searchlistAlbums = response.albums.items.map( 
                obj => ({
                    albumName: obj.name,
                    albumImage: (obj.images[0]) ? obj.images[0].url : 'https://via.placeholder.com/300',
                    albumUrl:  obj.external_urls.spotify
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
                    onChange={ (e)=>{ this.setState( {search:e.target.value}, this.updateSearch); }}/>

                <Tabs>
                    {/* Track information */}
                    <div label="Track">
                    {this.state.searchlistTracks.map(function(searchlistTrack, index){
                        return (
                            <StyledLinkA href={searchlistTrack.trackUrl} target="_blank">
                                <TableWrapper key={index} grid columns={'repeat(3,1fr)'}>
                                    <TableColumn>{searchlistTrack.trackName}</TableColumn>
                                    <TableColumn>{searchlistTrack.trackArtistName}</TableColumn>
                                    <TableColumn>{searchlistTrack.trackAlbumName}</TableColumn>
                                </TableWrapper>
                            </StyledLinkA> 
                        )}
                    )}
                    </div>
                    {/* Artist information */}
                    <div label="Artist">
                    <CardWrapper grid col_s={'repeat(2, 1fr)'} col_m={'repeat(3, 1fr)'} columns={'repeat(4, 1fr)'} gap={'30px'}>
                        {this.state.searchlistArtists.map(function(searchlistArtist, index){
                            return (
                                <StyledCard round_details key={index}>
                                    <a href={searchlistArtist.artistUrl} target="_blank">
                                        <span>
                                            <img src={searchlistArtist.artistImage} alt={searchlistArtist.artistName} />
                                        </span>
                                        <p>{searchlistArtist.artistName}</p>
                                    </a>
                                </StyledCard>
                            )}
                        )}
                    </CardWrapper>
                    </div>
                    {/* Album information */}
                    <div label="Albums">
                    <CardWrapper grid col_s={'repeat(2, 1fr)'} col_m={'repeat(3, 1fr)'} columns={'repeat(4, 1fr)'} gap={'30px'}> 
                        {this.state.searchlistAlbums.map(function(searchlistAlbum, index){
                            return (
                                <StyledCard image_details key={index}>
                                    <a href={searchlistAlbum.albumUrl}  target="_blank">
                                        <span>
                                            <img src={searchlistAlbum.albumImage} alt={searchlistAlbum.albumName} />
                                        </span>
                                        <p>{searchlistAlbum.albumName}</p>
                                    </a>
                                </StyledCard>
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

const StyledCard = styled(Card)`
    width: auto !important;

    a {
        background-color: transparent;
    }
`

const StyledLinkA = styled.a`
    color: ${Colors.white};
    text-decoration: none;
`

export default Header;