import React, {Component, Fragment} from 'react';
import {H1} from '../Theme';
import styled from 'styled-components';

class Login extends Component {
    render() {
        return (
            <Fragment>
                <H1>Zonex Music</H1>
                <a href='http://localhost:8888'> Login to Spotify </a>
            </Fragment>
        );
    }
}

export default Login;