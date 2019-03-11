import React, {Component} from 'react';
import styled from 'styled-components';
import {Colors, Device, Row, Column} from '../Theme';
import {NavLink} from 'react-router-dom';
import logo from './logo.svg';
import homeLogo from './home.svg';
import searchLogo from './search.svg';

class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <SidebarWrapper>                   
                    <Logo>
                        <img src={logo} alt="logo" />
                    </Logo>
                    <Menu flex direction={'column'}>
                    <MenuItemHome>
                        <NavLink to="/">
                            <img src={homeLogo} alt="logo" />
                            <span>Music</span>
                        </NavLink>
                    </MenuItemHome>
                    <MenuItem>
                        <NavLink to="/search">
                            <img src={searchLogo} alt="logo" />
                            <span>Find</span>
                        </NavLink>
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
    padding: 0 10px;

    @media ${Device.tablet} {
        padding: 0 30px;
    }
`

const MenuItem = styled(Column)`
    a {
        display: block;
        color: ${Colors.white};
        text-decoration: none;
        padding: 10px;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }

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
        }
    }
`

export default Sidebar;