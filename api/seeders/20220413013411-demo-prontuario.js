'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Prontuarios', [{
      comentarioEnfermeiro: 'Bem....',
      comentarioMedico: 'Razoavel... ainda a esperança',
      peso: 57,
      altura: 180,
      medico_id: 3,
      atendimento_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      comentarioEnfermeiro: 'Quase....',
      comentarioMedico: 'Mais ou menos... ainda a esperança',
      peso: 100,
      altura: 200,
      medico_id: 3,
      atendimento_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Prontuarios', null, {});

  }
};
