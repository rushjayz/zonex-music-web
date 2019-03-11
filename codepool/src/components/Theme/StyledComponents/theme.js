import styled, { css, createGlobalStyle } from "styled-components";
import {Colors} from '../Helper/variables'
import {Animations} from '../Helper/mixins'

/* ======================== Theme Variables ================================= */

// Theme common variables
export let Theme = {
    primary_font: 'Open Sans, sans-serif',
    secondary_font: 'Open Sans, sans-serif',
    font_size: '1.4rem',
    line_height: '1.4',

    // Using the colors from here. I feel like its good to be implemented in colors. So Colors.xxx will give all the values
    base_color: `${Colors.black}`,
    primary_color: `${Colors.blue}`,
    secondary_color: `${Colors.gray}`,
    link_color: `${Colors.blue}`,
    link_color__hover: `${Colors.blue_dark}`,
    link_color__special: `${Colors.yellow}`,
    disabled_color: `${Colors.gray}`,
    error_color: `${Colors.red}`,
    success_color: `${Colors.green}`,

<<<<<<< HEAD
    grid__gap: '10px',
=======
    grid__gap: '30px',
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4

    input__padding: '6px 10px',
    input__border_width: '2px',
    input__border_color: `${Colors.gray}`,
    input__border_style: 'solid',
    input__color: `${Colors.white}`,  
    input__background_color: `${Colors.gray}`,

    inner_wrapper__width_s: '90%',
    inner_wrapper__width_m: '730px',
    inner_wrapper__width_l: '1270px',
};

export const ListWrapperStyle = css`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListWrapper = styled.ul`
    ${ListWrapperStyle};
`;

/* ======================== Global Styling ================================= */
export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        font-size-adjust: 100%;
<<<<<<< HEAD
        overflow: hidden;
=======
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
        
        body {
            margin: 0;
            padding: 0;
            font-family: ${Theme.primary_font}; 
            font-size: 1.4rem;
            line-height: 1.4;  
            color: ${Colors.white};
            background-color: ${Colors.black};
            
            a {
              transition: ${Animations.transition__default};
              color: ${Theme.link_color};
              
              &:hover {
                color: ${Theme.link_color__hover}; 
              }
            }
             
<<<<<<< HEAD
            button {
=======
             button {
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
                background: transparent;
                border: 0;
                box-shadow: none;
                width: auto;
<<<<<<< HEAD
            }
=======
             }
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
        } 
    }
`;
