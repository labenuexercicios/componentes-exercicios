import styled from "styled-components";

export const HeaderCard = styled.header`
  grid-row: 1/2;
  grid-column: 1/2;
  background-color: orange;
  display: grid;
  grid-template-columns: 10vw 1fr;
  align-items: center;
  padding-left: 10px;
  width: 100%;
`;

export const MainCard = styled.main `
  grid-column: 1/2;
  grid-row: 2/3;
  width: 90%;
  display: grid;
  grid-template-columns: 10vw 5fr;
  margin: 10px 0px;

`

export const DivTelaToda = styled.div`
  display: grid;
  grid-template-rows: 10vh 1fr 10vh;
  height: 100vh;
  width: 100%;
`

export const NavCard = styled.nav`
  grid-column: 1/2;
  padding: 20px;
  border-right: 1px solid rgb(204, 203, 203);
`

export const SectionCard = styled.section`
  grid-column: 2/4;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-left: 50px;
  justify-content: flex-start;
  gap: 20px;
`

export const DivCard = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid rgb(201, 199, 199);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-self: flex-start;
`
export const DivUsuario = styled.div`
  display: flex;
  padding-right: 10%
`

