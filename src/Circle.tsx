import styled from "styled-components";
// interface
interface CircleProps {
  bgColor: string;
}

const Container = styled.div<CircleProps>`
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

