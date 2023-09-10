import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5rem;
  `;

const Title = styled.h1`
  font-size: 50px;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
`;

export { Container, Image, Title };
