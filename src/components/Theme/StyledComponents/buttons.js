import styled from "styled-components";
import {Colors} from "../Helper/variables";
import {Animations} from "../Helper/mixins";
import {Theme} from "./theme";

const Button = styled.button`
    // padding: 11px 8px;
    // border-radius: 2px;
    // text-transform: uppercase;
    // font-size: 1.3rem;
    // cursor: pointer;
    // text-align: center; 
    // min-width: 200px;
    // border: 2px solid ${Theme.primary_color};
    // transition: ${Animations.transition__default};
    
     
    background-color: #1D27E7; 
    color: #fff;
    min-width: 160px;
    font-size: 1.3rem;
    padding: 10px 20px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    transition: 0.3s;
    border-radius: 4px;
    border: 2px solid #1D27E7;
    outline: none;
    white-space: nowrap;
    font-weight: 500;
    vertical-align: middle;
    margin: 5px;
    box-shadow: 0 0 2px -2px rgba(29, 39, 231, .1), 0 0 3px 0 rgba(29, 39, 231, .1), 0 0 5px 0 rgba(29, 39, 231, .1), 0 2px 2px -4px rgba(29, 39, 231, .1), 0 4px 8px 0 rgba(29, 39, 231, .1), 0 2px 15px 0 rgba(29, 39, 231,
    
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);  
    
    &:after { 
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform .5s, opacity 1s; 
    }
`

export const PrimaryButton = styled(Button)`
    // background-color: ${Theme.primary_color};
    // color: ${Colors.white};
    //
    // &:hover {
    //     background-color: ${Colors.blue_dark};
    //     border-color: ${Colors.blue_dark};
    //     color: ${Colors.white}; 
    // }
`;

export const SecondaryButton = styled(Button)`
    color: ${Theme.primary_color};
    
    &:hover {
      border-color: ${Colors.blue_dark};
      color: ${Colors.blue_dark};
    }
`;

export const IconButton = styled(SecondaryButton)`
    position: relative;
    
    &:before {
      content: '+';
      left: 20px;  
      position: absolute;
      font-size: 34px; 
      top: -1px;
    }
`;