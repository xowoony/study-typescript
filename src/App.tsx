import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // event는 any타입이다 하지만 타입을 지정해주는 것이 좋다.
    // event에 타입을 추가하는 방법
    // 현재 타입스크립트는 이 onchange 함수가 InputElement에 의해서 실행될 것을 알게되는 것이다.
    console.log(event.currentTarget.value);
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
