const axios = require("axios");
const { PersonalizedCharacter, User } = require("../db");

const getCharacters = async (req, res, next) => {
  const { MARVEL_TS, MARVEL_APIKEY, MARVEL_HASH } = process.env;
  const { userId } = req.query;

  try {
    const charactersMarvel = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${MARVEL_TS}&apikey=${MARVEL_APIKEY}&hash=${MARVEL_HASH}`
    );
    const charactersDB = PersonalizedCharacter.findAll({
      where: {
        UserId: userId,
      },
    });

    Promise.all([charactersMarvel, charactersDB]).then((resp) => {
      const [charactersMarvel, charactersDB] = resp;

      let filteredMarvelApi = charactersMarvel.data.data.results.map((ch) => {
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

      let allCharacters = [...filteredMarvelApi, ...charactersDB];

      res.status(200).json(allCharacters);
    });
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
      UserId: userId,
    });

    res.status(201).json({
      ok: true,
      status: 201,
      message: "New character created: " + newCharacter,
    });
  } catch (err) {
    next(err);
  }
};

const putCharacter = async (req, res, next) => {
  const { id } = req.params;
  const updatedFields = req.body;
  console.log(id);
  try {
    let characterUpdated = await PersonalizedCharacter.update(updatedFields, {
      where: {
        id: id,
      },
    });
    res.status(200).json({
      ok: true,
      status: 200,
      message: "The character was updated succesfully: " + characterUpdated,
    });
  } catch (err) {
    next(err);
  }
};

const deleteCharacter = async (req, res, next) => {
  const id = req.params.id;
  try {
    await PersonalizedCharacter.update(
      { isActive: false },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({
      ok: true,
      status: 200,
      message: "The character was deleted succesfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCharacters,
  createCharacter,
  putCharacter,
  deleteCharacter,
};
