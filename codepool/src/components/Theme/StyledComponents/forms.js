import styled from "styled-components";
import {Theme} from "./theme";
import {Colors} from '../Helper/variables'; 

const Variables = {
    label_background_color__error: '#E24C4C',
    label_color__error: '#fff',
};

export const Input = styled.input`
    font: ${Theme.font_size} ${Theme.primary_font};
    padding: ${Theme.input__padding};
    border-width: ${Theme.input__border_width};
    border-style: ${Theme.input__border_style};
    border-color: ${Theme.input__border_color}; 
<<<<<<< HEAD
    min-width: calc(100% - 20px); 
    margin-bottom: 20px;
    background-color: ${Colors.gray};
    color: ${Colors.white}; 
    outline: none;

    &::-webkit-input-placeholder {
        color: ${Colors.gray_light_bluish};
    }
=======
    min-width: 300px; 
    margin-bottom: 20px;
    background-color: ${Colors.gray};
    color: ${Colors.white}; 
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
`;

export const ErrorLabel = styled.label`
    position: absolute; // Should add wrapper with position relative
    bottom: -19px;
    left: 0;
    min-width: 160px;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    padding: .2em .8em;
    background-color: ${Variables.label_background_color__error};
    color: ${Variables.label_color__error};
    letter-spacing: 0;
`;