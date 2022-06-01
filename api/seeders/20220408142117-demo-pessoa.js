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
      email: 'john@gmail.com',
      senha: '14ff8fd',
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
      email: 'maria@gmail.com',
      senha: '14fadadd',
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
      email: 'marcos@gmail.com',
      senha: 'fdad12d',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
