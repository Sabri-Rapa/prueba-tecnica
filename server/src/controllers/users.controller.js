const { User } = require("../db");

const getUsers = async (req, res, next) => {
  const { id } = req.query;

  let users;

  try {
    if (id) {
      users = await User.findByPk(id);
    } else {
      users = await User.findAll({
        order: [["name", "ASC"]],
      });
    }

    users.length
      ? res.status(200).send(users)
      : res.status(200).send("User wasn't found");
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  let user;
  try {
    if (id) {
      user = await User.findByPk(id);
    }
    user
      ? res.status(200).send(user)
      : res.status(200).send("User wasn't found");
  } catch (error) {
    next(error);
  }
};

const postUser = async (req, res, next) => {
  const { name, password, email } = req.body;

  if(!name || !password || !email) res.json("Información incompleta")

  try {
    let found = await User.findAll({
      where: {
        email,
      },
    });
console.log(found)
    if (found.length) {
      res.json("El usuario ya existe");
    } else {
      await User.create({
        name,
        password,
        email,
        isActive: true,
      });
      res.status(201).json({
        ok: true,
        status:201,
        message: 'New user created'
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, getUserById, postUser };
