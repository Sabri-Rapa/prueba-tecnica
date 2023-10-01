const axios = require("axios");
const { PersonalizedCharacter, User } = require("../db");

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
        image: ch.thumbnail.path + "." + ch.thumbnail.extension,
        description: ch.description,
        numberComics: ch.comics.available,
        numberSeries: ch.series.available,
        numberStories: ch.stories.available,
      };
    });

    res.status(200).json(charactersData);
  } catch (err) {
    next(err);
  }
};

const createCharacter = async (req, res, next) => {
  const { name, description, image, userId } = req.body;
  
  if (!name || !description || !image) {
    res.status(400).json({
      ok: false,
      status: 400,
      message: "Information incomplete",
    });
  }

  let aux = name[0].toUpperCase() + name.slice(1);

  try {
    let newCharacter = await PersonalizedCharacter.create({
        name: aux,
        description,
        image,
        isActive: true,
        UserId: userId
    });

    res.status(201).json({
      ok: true,
      status: 201,
      message: "New character created: " + newCharacter,
    });
  } catch (err) {
    next(err)
  }
};

module.exports = { getMarvelApiCharacters, createCharacter };
