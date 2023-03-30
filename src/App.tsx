import React from 'react';
import styled from "styled-components";

// Title 컴포넌트
// index.js에서 만들어준 theme textColor에 접근해 볼 수 있다.
const Title = styled.h1`
  color: ${(props) =>
    props.theme.textColor}; // props.theme.property이름 이라 작성해주면 된다.
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
