import styled,{css} from 'styled-components';
import {theme } from '../../styles/theme'
export const Container = styled.div`
  ${({theme}) => css`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${theme.spacings.large}
  `}
`;
