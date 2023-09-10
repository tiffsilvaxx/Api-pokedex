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
  min-width: 500px;
  justify-content: space-between;
`;
const SearchInput = styled.input`
  width: 12cm;
  height: 2rem;
  background-color: #f4f5ee;
  border-radius: 7px;
  border: 1px solid #0000004b;
  &:hover {
    cursor: pointer;
    transition: 0.25s ;
  }

`;
const FooterButton = styled.button`
  border: 1px solid #0000004b;
  border-radius: 8px;
  width: 200px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  background-color: #f4f5ee;

  &:hover {
    cursor: pointer;
    background-color: #a26a42;
  }
`;
export { Container, Row, SearchInput, FooterButton };
