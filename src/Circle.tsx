import styled from "styled-components";
// interface
interface ContainerProps {
  bgColor: string; // CircleProps 상태랑 똑같이 만들어주어야 함.
  borderColor?: string; // CircleProps 상태랑 똑같이 만들어주어야 함
}

interface CircleProps {
  bgColor: string; // required. 필수적으로 사용해야함.
  borderColor?: string; // optional. 사용해도 되고 안해도 됨.
}

// styled-component
const Container = styled.div<ContainerProps>`
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 0.5rem solid ${(props) => props.borderColor};
   // css에서 borderColor는 optional 상태가 아니다. optional 표시는 interface에서!
`;


// Circle Props
// bgColor의 타입은 CircleProps의 오브젝트다 라고 말해주고 있는격
// borderColor를 styled-component인 Container로 보내준다.
// borderColor는 optional이다. 위 interface에서 그렇게 정의해줬기 때문
// borderColor={borderColor ?? "yellow"} 의 뜻
// 사용자가 입력한 color를 따르겠지만, undefined면 yellow로 설정하겠다는 뜻.
function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? "yellow"} />;

}

export default Circle;
