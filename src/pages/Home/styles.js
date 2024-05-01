import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container  = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

`;
export const Brand  = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  > h1{ 
    font-size: 24px;
    color:  ${({theme}) => theme.COLORS.ORANGE};

  }



`;
export const Menu = styled.ul`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  padding-top: 64px;
  text-align: center;
  
  >li {
    margin-bottom: 24px;
  }



  grid-area: menu;
  `;
export const Search = styled.div`
  padding: 64px 64px 0;
  grid-area: search;
  `;
export const Content = styled.div`

  padding: 0 64px;
  overflow-y: scroll;
  
  grid-area: content;
`
export const NewNote = styled (Link)`

  background-color:  ${({theme}) => theme.COLORS.ORANGE};
  border: none;

  color:  ${({theme}) => theme.COLORS.BACKGROUND_900};

  display:flex;
  align-items: center;
  justify-content: center;
  
  > svg {
    margin-right:  8px;
    
  }


  grid-area: newnote;
  

`;