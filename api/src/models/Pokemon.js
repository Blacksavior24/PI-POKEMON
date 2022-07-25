const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "50",
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "50",
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "50",
    },
    speed:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "50",
    },
    height:{
      type: DataTypes.FLOAT,
      defaultValue: "50",
    },
    weight:{
      type: DataTypes.FLOAT,
      defaultValue: "50",
    },
    img:{
      type: DataTypes.STRING,
    }

  });
};
