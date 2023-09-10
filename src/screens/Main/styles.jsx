import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  background-color: #aaa69d;
`;
const SearchInput = styled.input`
  width: 12cm;
  height: 2rem;
`;
const FooterButton = styled.button`
border: 1px solid #000;
width: 100px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;

&:hover{
    cursor:pointer;
    background-color: chocolate;
}



`
export { Container, Row, SearchInput, FooterButton};
