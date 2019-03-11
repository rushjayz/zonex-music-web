import styled, {css} from 'styled-components';
import {Device} from './mixins';
import {Theme} from '../StyledComponents/theme';

function getWidthString(colWidth) {
    if (!colWidth) return;

    let width = colWidth / 12 * 100;
    return `width: ${width}%`;
}

export const Flex = css`
  display: flex;
`;

export const Row = styled.div`
    ${props => props.grid && css`
        display: grid;
        grid-gap: ${ ({gap}) => gap ? gap : `${Theme.grid__gap}` }; 
        grid-template-columns: ${ ({columns}) => columns ? columns : '' }; 
        grid-template-rows: ${ ({rows}) => rows ? rows : '' };
      
        @media ${Device.mobile} {
            grid-template-columns: ${ ({col_s}) => col_s ? col_s : '' }; 
            grid-template-rows: ${ ({row_s}) => row_s ? row_s : '' };
        }
        
        @media ${Device.tablet} {
            grid-template-columns: ${ ({col_m}) => col_m ? col_m : '' }; 
            grid-template-rows: ${ ({row_m}) => row_m ? row_m : '' };
<<<<<<< HEAD
            grid-auto-columns: max-content;

            ${props => props.auto_flow && css`
                grid-auto-flow: column;
            `};
=======
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
        }
        
        @media ${Device.desktop} {
            grid-template-columns: ${ ({col_l}) => col_l ? col_l : '' }; 
            grid-template-rows: ${ ({row_l}) => row_l ? row_l : '' }; 
        }
    `};
    
    ${props => props.flex && css`
        display: flex;
        align-items: ${ ({align}) => align ? align: '' };
        justify-content: ${ ({justify}) => justify ? justify: '' };
        flex-direction: ${ ({direction}) => direction ? direction: '' };
    `};

<<<<<<< HEAD
=======
    ${props => props.auto_flow && css`
        grid-auto-flow: column;
    `};

    grid-auto-columns: max-content;

>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
    height: ${ ({height}) => height ? height : '' }; 
`;

export const Column = styled.div`
<<<<<<< HEAD
    ${({ sm }) => (sm ? getWidthString(sm) : '')}; 
=======
    ${({ sm }) => (sm ? getWidthString(sm) : 'width:100%')}; 
>>>>>>> 2a1d66613fe38562ef18c18e9cbda74881ce2aa4
    
    ${props => props.grid && css`
      display: grid;
    `};
    
    ${props => props.flex && css`
        display: flex;
        align-items: ${ ({align}) => align ? align: '' };
        justify-content: ${ ({justify}) => justify ? justify: '' };
    `};
    
    @media ${Device.tablet} {
        ${({ md }) => md && getWidthString(md)};
    }
    
    @media ${Device.desktop} {
        ${({ lg }) => lg && getWidthString(lg)};
    }
`;
