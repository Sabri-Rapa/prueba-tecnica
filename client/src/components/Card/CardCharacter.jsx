import style from "./cardCharacter.module.css";

const CardCharacter = (props) => {
  const {
    name,
    image,
    description,
    numberComics,
    numberSeries,
    numberStories,
  } = props;

  return (
    <div className={style.container}>
      <img src={image} alt="Character picture" className={style.imgContainer} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Number Comics: {numberComics}</p>
      <p>Number Series: {numberSeries}</p>
      <p>Number Stories: {numberStories}</p>
    </div>
  );
};

export default CardCharacter;
