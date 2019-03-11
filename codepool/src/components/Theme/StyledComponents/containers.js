<<<<<<< HEAD
import styled, {css} from 'styled-components';
=======
import styled from 'styled-components';
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
import { Device, Animations } from "../Helper/mixins";
import { Row, Column } from "../Helper/grids";
import { Theme } from "./theme";
import {Colors} from '../Helper/variables'; 

export const OuterWrapper = styled.section`
  width: 100%;
`;

export const InnerWrapper = styled.section`
  margin: 0 auto;
  width: 100%; 
  max-width: ${Theme.inner_wrapper__width_s};
  
  @media ${ Device.tablet } {
    max-width: ${ Theme.inner_wrapper__width_m };
  }
  
  @media ${ Device.desktop } {
    max-width: ${ Theme.inner_wrapper__width_l };
  } 
`;

export const CardWrapper = styled(Row)`
<<<<<<< HEAD
  
=======
  overflow: auto;
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4

  &::-webkit-scrollbar {
    height: 5px;
    background-color: transparent;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.primary_color};
    border-radius: 10px;
    cursor: pointer;
  }
<<<<<<< HEAD

  @media ${Device.tablet} {
    overflow: auto;
  }
`

export const Card = styled(Column)`
  cursor: pointer;

  ${props => props.round_details && css`
      span {
        border-radius: 50%;
        border: 4px solid ${Colors.gray};
      }

      @media ${Device.tablet} {
        width: 200px;
      }
  `};

  ${props => props.image_details && css`
      overflow: hidden;
      margin-bottom: 20px;
      position: relative;

      @media ${Device.tablet} {
        width: 150px;
      }
  `};
=======
`

export const Card = styled(Column)`
  width: 150px;
  
  overflow: hidden;
  margin-bottom: 20px;
  
  position: relative;
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4

  &:after {
    /* content: '';
    box-shadow: 0 0 20px 2px rgba(2, 0, 14, .88); */
  }

  span {
    display: block;
    overflow: hidden;

    img {
      width: 100%;
      display: block;
      transition: all 1s ease;
    }
  }

<<<<<<< HEAD
  p {
    text-align: center;
  }

=======
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
  a {
    text-decoration: none;
    color: ${Colors.white};
    display: block;
    background-color: ${Colors.gray};

    p {
      position: relative;
      padding: 10px;
<<<<<<< HEAD
      font-size: 1.4rem;
      margin: 0;
=======
      font-size: 1.3rem;
      margin: 0;

        &:nth-child(3) {
          color: ${Colors.gray_light};
          font-size: 1.2rem;
          padding-top: 0;
        }
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
    }
    
    &:hover {
      img {
        transform: ${Animations.zoom_in}; 
      }
    }
  }
`;
<<<<<<< HEAD

export const TableWrapper = styled(Row)`

`

export const TableColumn = styled(Column)`
  padding: 20px;
`
=======
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
