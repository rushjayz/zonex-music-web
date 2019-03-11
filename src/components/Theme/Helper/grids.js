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
            /* grid-auto-columns: max-content; */

            ${props => props.auto_flow && css`
                grid-auto-flow: column;
            `};

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

    height: ${ ({height}) => height ? height : '' }; 
`;

export const Column = styled.div`
    ${({ sm }) => (sm ? getWidthString(sm) : '')}; 
    
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
