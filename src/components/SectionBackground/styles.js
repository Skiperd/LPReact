import styled,{css} from 'styled-components';
import {theme } from '../../styles/theme'

const containerBackgroundActivate = () => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`

export const Container = styled.div`
  ${({theme, background}) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;

