import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10cm;
  height: 25cm;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.2rem;
`;

const Pokemoncontainer = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 8px;
  margin-bottom: 15px;
  width: 100%;
  &:hover {
    cursor: pointer;
    background-color: #34333369;
  }
`;
export { Container, Pokemoncontainer };
