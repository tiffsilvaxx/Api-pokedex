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
`;
const FooterButton = styled.button`
  border: 1px solid #000;
  border-radius: 8px;
  width: 200px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    background-color: #a26a42;
  }
`;
export { Container, Row, SearchInput, FooterButton };
