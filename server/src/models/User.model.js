"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  

  User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true,
    }
  );
  return User;
};
