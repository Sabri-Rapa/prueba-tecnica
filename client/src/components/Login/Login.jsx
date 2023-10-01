import { useState } from "react";

export const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <button>INGRESAR</button>
      </form>
    </>
  );
};

export default Login;