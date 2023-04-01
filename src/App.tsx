import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // event를 열어보자
    // currentTarget의 value를 얻어옴
    // 그리고 setValue를 해줌 => 입력한 내용이 현재 value가 됨

    // 타입스크립트가 현재 setValue는 string을 받아야 한다는 것을 검사하고 있고
    // 이 onChange 이벤트는 밑에 type="text" 인 input에 의해 만들어 졌으며
    // value를 hover 해보면 const value: string 이 뜨는 것으로 보아 타입스크립트는 이미 알고 있는 것이다.
    const {currentTarget: { value }} = event;
    setValue(value);
  };

  return (
    <div>
      <form>
        {/* input의 value를 state와 연결하기 */}
        <input
          type="text"
          onChange={onChange}
          placeholder="username"
          value={value}
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default App;
