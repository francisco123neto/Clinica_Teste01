'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Atendimento, {
        foreignKey: 'paciente_id'
      })
      Pessoas.hasMany(models.Enfermidade, {
        foreignKey: 'paciente_id'
      })
      Pessoas.hasMany(models.Prontuario, {
        foreignKey: 'medico_id'
      })
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    nascimento: DataTypes.STRING,
    tipoSanguineo: DataTypes.STRING,
    sexo: DataTypes.STRING,
    statusPessoa: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};