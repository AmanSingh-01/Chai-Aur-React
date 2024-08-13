import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <div>
        <h3>Login</h3>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
          id="name"
        />
        <input
          type="password"
          value={password}
          id="name2"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;
