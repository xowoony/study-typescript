import styled from "styled-components";

// Container 컴포넌트
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

// H1 컴포넌트
const H1 = styled.div`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>Protected</H1>
    </Container>
  );
}

export default App;
