import { useState } from "react";
import styled from "styled-components";
// interface
interface ContainerProps {
  bgColor: string; // CircleProps 상태랑 똑같이 만들어주어야 함.
  borderColor: string; // CircleProps 상태랑 똑같이 만들어주어야 함
}

interface CircleProps {
  bgColor: string; // required. 필수적으로 사용해야함.
  borderColor?: string; // optional. 사용해도 되고 안해도 됨.
  text?: string;
}

// styled-component
const Container = styled.div<ContainerProps>`
  width: 6rem;
  height: 6rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 0.5rem solid ${(props) => props.borderColor};
`;

// Circle Props
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const[counter, setCounter] = useState(true);
  setCounter(false);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}



export default Circle;
