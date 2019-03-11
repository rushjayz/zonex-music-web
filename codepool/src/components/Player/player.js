import React, {Component} from 'react';
// import styled from 'styled-components';
// import {Colors, Row, Column, H3} from '../Theme';
// import SpotifyWebApi from 'spotify-web-api-js';

// const spotifyApi = new SpotifyWebApi();

class Player extends Component {

    // constructor(){
    //     super();
    //     this.state = {
    //         nowPlaying: { 
    //             name: '', 
    //             albumArt: '' 
    //         }
    //     }
    // }

    componentDidMount() {
        //spotifyApi.getMyCurrentPlaybackState()
        // .then((response) => {
        //   this.setState({
        //     nowPlaying: {
        //       name: response.item.name,
        //       image: response.item.album.images[0].url,
        //       artistname: response.item.artists[0].name,

        //     }
        //   })
        // })
      }

    render() {
        return (
            // <PlayerWrapper className={'rush'}>
            //     <NowPlayingData grid columns={"60px auto"}>
            //         <Column><img src={this.state.nowPlaying.image} alt={this.state.nowPlaying.name} /> </Column>
            //         <Column flex>
            //             <Row grid columns={"1fr"} gap={"10"}>
            //                 <Column>
            //                     <H3>{this.state.nowPlaying.name}</H3>
            //                 </Column>
            //                 <Column>
            //                     <div>{this.state.nowPlaying.artistname}</div>
            //                 </Column>
            //             </Row>
            //         </Column>
            //     </NowPlayingData>

            // </PlayerWrapper>
            <div></div>
        )
    }
}

// const PlayerWrapper = styled.section`
//     position: fixed;
//     bottom: 0;
//     left: 0;
//     background-color: ${Colors.primary_color};
//     width: 100%;
//     z-index: 8;
//     padding: 20px;
// `;

// const NowPlayingData = styled(Row)`
//     img {
//         border-radius: 50px;
//         width: 60px;
//     }
// `;

export default Player;