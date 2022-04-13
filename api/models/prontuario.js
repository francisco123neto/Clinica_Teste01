'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prontuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prontuario.hasMany(models.Enfermidade, {
        foreignKey: 'prontuario_id'
      })
      Prontuario.belongsTo(models.Pessoas, {
        foreignKey: 'medico_id'
      })
      Prontuario.belongsTo(models.Atendimento, {
        foreignKey: 'atendimento_id'
      })
    }
  }
  Prontuario.init({
    comentarioEnfermeiro: DataTypes.TEXT,
    comentarioMedico: DataTypes.TEXT,
    peso: DataTypes.FLOAT,
    altura: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Prontuario',
  });
  return Prontuario;
};