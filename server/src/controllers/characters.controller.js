const axios = require("axios");

const getMarvelApiCharacters = async (req, res, next) => {
  const { MARVEL_TS, MARVEL_APIKEY, MARVEL_HASH } = process.env;

  try {
    const characters = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${MARVEL_TS}&apikey=${MARVEL_APIKEY}&hash=${MARVEL_HASH}`
    );

    const charactersArray = characters.data.data.results;

    const charactersData = charactersArray.map((ch) => {
      return {
        id: ch.id,
        name: ch.name,
        image: ch.thumbnail.path + '.' + ch.thumbnail.extension,
        description: ch.description,
        numberComics: ch.comics.available,
        numberSeries: ch.series.available,
        numberStories: ch.stories.available,
      };
    });

    res.send(charactersData);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getMarvelApiCharacters };
