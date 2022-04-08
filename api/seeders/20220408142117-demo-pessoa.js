'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pessoas', [{
      nome: 'John Doe',
      cpf: '595940421-32',
      nascimento: '20/10/1978',
      tipoSanguineo: 'A+',
      sexo: 'Masculino',
      statusPessoa: 'Paciente',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
