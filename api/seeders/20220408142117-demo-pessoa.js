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
    },
    {
      nome: 'Maria José',
      cpf: '5339404254-35',
      nascimento: '15/11/1959',
      tipoSanguineo: 'O+',
      sexo: 'Feminino',
      statusPessoa: 'Paciente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Marcos Neves',
      cpf: '5339404254-39',
      nascimento: '15/11/1979',
      tipoSanguineo: 'O+',
      sexo: 'Masculino',
      statusPessoa: 'Médico',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
