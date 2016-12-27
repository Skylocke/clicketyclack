'use strict';
module.exports = function(sequelize, DataTypes) {
  var clickers = sequelize.define('clickers', {
    name: DataTypes.STRING,
    clicks: DataTypes.INTEGER,
    sprintBest: DataTypes.INTEGER,
    enduranceBest: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return clickers;
};