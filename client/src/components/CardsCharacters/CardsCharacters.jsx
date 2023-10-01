import { useEffect, useState } from "react";
import CardCharacter from "../Card/CardCharacter";
import axios from "axios";
import style from "./cardsCharacters.module.css";

const CardsCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCh = async () => {
      const ch = await axios("http://localhost:5000/api/characters/marvel");
      console.log(ch.data);
      setCharacters(ch.data);
    };
    getCh();

  }, []);

  return (
    <div className={style.container}>
      {characters?.map((ch) => {
        return (
          <CardCharacter
            key={ch.id}
            name={ch.name}
            image={ch.image}
            description={ch.description}
            numberComics={ch.numberComics}
            numberSeries={ch.numberSeries}
            numberStories={ch.numberStories}
          />
        );
      })}
    </div>
  );
};

export default CardsCharacters;
