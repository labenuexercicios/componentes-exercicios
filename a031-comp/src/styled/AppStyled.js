import {createGlobalStyle} from "styled-components";
import styled from 'styled-components';

export const TelaInteira = styled.section 
`
height: 100vh;
display: flex;
flex-direction: column;
`

export const Header = styled.header
`
background-color: orange;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 50px;
height: 10%;
`

export const Main = styled.main 
`
min-height: 80%;
display: flex;
`


export const MenuVertical = styled.nav
`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`

export const BotoesMenuVertical = styled.li
`
  list-style-type: none;
`

export const PainelDeVideos = styled.section 
`
flex-grow: 1;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, 1fr);
row-gap: 10px;
column-gap: 10px;
padding: 0px 0px 2000px 0px;
`