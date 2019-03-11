import React, {Component, Fragment} from 'react';
import { Redirect } from 'react-router';

class Login extends Component {
    render() {
        return (
            <Fragment>
                <Redirect to={window.location.replace("http://localhost:8888")} />
                
            </Fragment>
        );
    }
}

export default Login;