import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import loginValidation from "./loginValidation";

export const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setErrors(loginValidation({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{

      let getUser = await axios.post(
        "http://localhost:5000/api/users/verifyUser",
        {
          email: userData.email,
          password: userData.password,
        }
      );

      localStorage.setItem('userId', getUser.data.userId)
      navigate('/characters')


    }catch(err){
      console.log(err)
      setErrors({accessDenied: 'Contraseña incorrecta o usuario inexistente'})
    }
 
  };

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
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <button disabled={Object.keys(errors).length}>INGRESAR</button>
        {errors.accessDenied && <span>{errors.accessDenied}</span>}
      </form>
    </>
  );
};

export default Login;
