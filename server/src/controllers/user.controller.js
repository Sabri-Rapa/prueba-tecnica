const { User } = require("../db");

const getUsers = async (req, res) => {
  const { id } = req.query;

  let users;

  try {
    if (id) {
      users = await User.findByPk(id);
    } else {
      users = await User.findAll({
        order: [["user_name", "ASC"]],
      });
    }

    users.length
      ? res.status(200).send(users)
      : res.status(200).send("User wasn't found");
  } catch (error) {
    next(error);
  }
};

const postUser = async (req, res) => {
  const { userName, password, email } = req.body;

  try {
    let found = await User.findAll({
      where: {
        email,
      },
    });

    if (found) {
      res.json("El usuario ya existe");
    } else {
      await User.create({
        userName,
        password,
        email,
      });
      res.status(201).send("Nuevo usuario creado");
    }
  } catch (error) {
    next(error);
  }
};


module.exports = { getUsers, postUser }