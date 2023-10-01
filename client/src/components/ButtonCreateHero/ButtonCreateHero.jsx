import { useNavigate } from "react-router";

const ButtonCreateHero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-character");
  };

  return (
    <>
      <button onClick={handleClick}>Create my hero!</button>
    </>
  );
};

export default ButtonCreateHero;
