'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atendimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Atendimento.hasOne(models.Prontuario, {
        foreignKey: 'atendimento_id'
      })
      Atendimento.belongsTo(models.Pessoas, {
        foreignKey: 'paciente_id'
      })
    }
  }
  Atendimento.init({
    dataEntrada: DataTypes.DATE,
    dataSaida: DataTypes.DATE,
    statusAtendimento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Atendimento',
  });
  return Atendimento;
};