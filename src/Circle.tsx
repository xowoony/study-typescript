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
`;

// bgColor의 타입은 CircleProps의 오브젝트다 라고 말해주고 있는격
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
