<<<<<<< HEAD
import React, {Component, Fragment} from 'react';
import {H2, CardWrapper, Card} from '../Theme';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class Home extends Component {

    constructor(){
        super();
        this.state = {
            // Defining Playlist array
            lists: []
        }
    }
    
    componentDidMount() {
        // spotifyApi.getRecommendations('seed_genres?pop')
        // .then((response) => {
        //     // const lists = response.items.map(
        //     //     //Getting all object values
        //     //     obj => ({
        //     //         name: obj.name,
        //     //         cover: obj.images[0].url
        //     //     })
        //     // )

        //     // this.setState({lists}) 
        // })

        
    }

    render() {
        return (
            <Fragment>
                <H2>Recommondations</H2>
                {/* <CardWrapper grid auto_flow>
                    {this.state.lists.map(function(list, index){
                        return (
                        <Card key={index}>
                            <a href="#">
                                <img src={list.cover} alt={list.name} />
                                <p>{list.name}</p>   
                            </a>                   
                        </Card>
                        )}
                    )}
                </CardWrapper> */}
            </Fragment>
        );
    }
}

=======
import React, {Component, Fragment} from 'react';
import {H2, CardWrapper, Card} from '../Theme';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class Home extends Component {

    constructor(){
        super();
        this.state = {
            // Defining Playlist array
            lists: []
        }
    }
    
    componentDidMount() {
        // spotifyApi.getRecommendations('seed_genres?pop')
        // .then((response) => {
        //     // const lists = response.items.map(
        //     //     //Getting all object values
        //     //     obj => ({
        //     //         name: obj.name,
        //     //         cover: obj.images[0].url
        //     //     })
        //     // )

        //     // this.setState({lists}) 
        // })

        
    }

    render() {
        return (
            <Fragment>
                <H2>Recommondations</H2>
                {/* <CardWrapper grid auto_flow>
                    {this.state.lists.map(function(list, index){
                        return (
                        <Card key={index}>
                            <a href="#">
                                <img src={list.cover} alt={list.name} />
                                <p>{list.name}</p>   
                            </a>                   
                        </Card>
                        )}
                    )}
                </CardWrapper> */}
            </Fragment>
        );
    }
}

>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
export default Home;