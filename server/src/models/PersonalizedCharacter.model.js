"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PersonalizedCharacter extends Model {}
  

  PersonalizedCharacter.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "PersonalizedCharacter",
      paranoid: true,
    }
  );
  return PersonalizedCharacter;
};
