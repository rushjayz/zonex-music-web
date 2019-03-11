<<<<<<< HEAD
import React, {Component} from 'react';
import styled from 'styled-components';
import {H1, Colors, Device, Row, Column} from '../Theme';
import {NavLink} from 'react-router-dom';
import logo from './logo.svg';
import homeLogo from './home.svg';

class Sidebar extends Component {

    searchAll() {
        alert('sa');
    }

    render() {
        return (
            <React.Fragment>
                <SidebarWrapper>
                    
                    <Logo>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Logo>
                    <Menu flex direction={'column'}>
                    <MenuItemHome><NavLink to="/"><span>Music</span></NavLink></MenuItemHome>
                    <MenuItem><NavLink to="/search"><span>Find</span></NavLink></MenuItem>
                        {/* <MenuItem><NavLink to="/">Music</NavLink></MenuItem>
                        <MenuItem><a href="#">Find</a></MenuItem>
                        <MenuItem><NavLink to="/albums">Albums</NavLink></MenuItem>
                        <MenuItem><NavLink to="/collection">Collection</NavLink></MenuItem> */}
                    </Menu>
                </SidebarWrapper>
            </React.Fragment>
        );
    }
}

const SidebarWrapper = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${Colors.gray};
    z-index: 5;
    width: 60px;

    @media ${Device.tablet} {
        width: 200px;
        padding: 20px 0;
    }
`;

const Logo = styled.div`
    width: 40px;
    margin: 0 auto;
    padding: 10px;

    @media ${Device.tablet} {
        width: 100px;
    }
`;

const Menu = styled(Row)`
    margin-top: 40px;
    padding: 0 30px;
`

const MenuItem = styled(Column)`
    a {
        display: block;
        color: ${Colors.white};
        text-decoration: none;
        padding: 10px;
        position: relative;

        @media ${Device.mobile} {
            span {
                display: none;
            }
        }

        @media ${Device.tablet} {
            padding: 30px 10px;
        }
    }
`

const MenuItemHome = styled(MenuItem)`
    a {
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 5px;
            /* background-color: ${Colors.gray_light}; */
        }
    }
`

=======
import React, {Component} from 'react';
import styled from 'styled-components';
import {H1, Colors, Device, Row, Column} from '../Theme';
import {NavLink} from 'react-router-dom';

class Sidebar extends Component {

    searchAll() {
        alert('sa');
    }

    render() {
        return (
            <React.Fragment>
                <SidebarWrapper>
                    <Logo>Zonex Music</Logo>
                    <Menu grid>
                    <MenuItem>
                        <button onClick={() => this.searchAll()}>Find</button>
                    </MenuItem>
                        {/* <MenuItem><NavLink to="/">Music</NavLink></MenuItem>
                        <MenuItem><a href="#">Find</a></MenuItem>
                        <MenuItem><NavLink to="/albums">Albums</NavLink></MenuItem>
                        <MenuItem><NavLink to="/collection">Collection</NavLink></MenuItem> */}
                    </Menu>
                </SidebarWrapper>
            </React.Fragment>
        );
    }
}

const SidebarWrapper = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: ${Colors.gray};
    z-index: 5;
    padding: 20px;
    width: 50px;

    @media ${Device.tablet} {
        width: 200px;
    }
`;

const Logo = styled(H1)`
    color: ${Colors.yellow};
    margin: 0 0 5rem;
    font-size: 2.4rem;
    text-align: center;
`;

const Menu = styled(Row)`

`

const MenuItem = styled(Column)`

`

>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
export default Sidebar;