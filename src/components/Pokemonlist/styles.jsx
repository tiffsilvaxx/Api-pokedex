import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%`;

const Pokemoncontainer = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #0000004b;
  border-radius: 8px;
  margin-bottom: 15px;
  width: 500px;
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
    background-color: #34333369;
  }`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 2rem;
  margin-top: 100px;
  margin-bottom: 15px;
`;
export { Container, Pokemoncontainer, Title };
