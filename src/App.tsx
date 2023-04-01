import { useState } from "react";

function App() {
  const [value, setValue] = useState("");



  // onChange
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event; //  ES6 문법
    setValue(value);
  };


  // onSubmit
  // onSubmit 또한 React.FormEvent 이므로 적어주고 form이 이벤트를 발생할 것이기 때문에
  // HTMLFormElement를 작성해주면 된다.
  // <>안에는 어떤 element가 이벤트를 발생시키는지 생각해보고 그걸 적어주면 된다.
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 새로고침 방지
    console.log("Hello", value); // value 는 user의 이름이다
  };


  return (
    <div>
      <form onSubmit={onSubmit}>
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
