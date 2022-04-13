'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Atendimentos', [{
      dataEntrada: "2021-07-06 07:55:33",
      dataSaida: "2021-07-21 09:55:33",
      statusAtendimento: 'Concluído',
      paciente_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      dataEntrada: "2021-09-06 07:55:33",
      dataSaida: "2021-10-21 09:55:33",
      statusAtendimento: 'Concluído',
      paciente_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Atendimentos', null, {});

  }
};
