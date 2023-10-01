// import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css";
import ButtonCreateHero from "../ButtonCreateHero/ButtonCreateHero";
const Nav = () => {
  return (
    <div className={style.container}>
      <ButtonCreateHero />
    </div>
  );
};

export default Nav;
