import styled from "styled-components";
// interface
interface CircleProps {
  bgColor: string;
}

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

// bgColor의 타입은 CircleProps의 오브젝트다 라고 말해주고 있는격
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;



// interface 사용의 쉬운 예
interface playerShape {
  age: string;
  name: string;
}

const introduce = (playerObj: playerShape) => `Hello ${playerObj.name} Your Name is ${playerObj.name}.`;


// introduce function을 어디서든지 쓸 수 있게됨.