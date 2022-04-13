'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enfermidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Enfermidade.belongsTo(models.Pessoas, {
        foreignKey: 'paciente_id'
      })
      Enfermidade.belongsTo(models.Prontuario, {
        foreignKey: 'prontuario_id'
      })
    }
  }
  Enfermidade.init({
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enfermidade',
  });
  return Enfermidade;
};