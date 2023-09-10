import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3b3a3856;
  border-radius: 5rem;
  `;

const Title = styled.h1`
  font-size: 50px;
`;

const Image = styled.img`
  width: 5cm;
  height: 5cm;
`;

export { Container, Image, Title };
