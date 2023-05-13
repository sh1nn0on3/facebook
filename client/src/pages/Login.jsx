import { useState } from "react";

const Login = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>submit</button>
    </>
  );
};

export default Login;
