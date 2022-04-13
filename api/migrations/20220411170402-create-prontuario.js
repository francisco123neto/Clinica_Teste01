'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prontuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comentarioEnfermeiro: {
        type: Sequelize.TEXT
      },
      comentarioMedico: {
        type: Sequelize.TEXT
      },
      peso: {
        type: Sequelize.FLOAT
      },
      altura: {
        type: Sequelize.FLOAT
      },
      medico_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pessoas', key: 'id' }
      },
      atendimento_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Atendimentos', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prontuarios');
  }
};