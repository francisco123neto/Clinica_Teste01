'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enfermidades', [{
      nome: 'Câncer',
      tipo: 'não sei...',
      descricao: 'não sei',
      status: 'Melhor',
      paciente_id: 2,
      prontuario_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Diabetes',
      tipo: 'não sei...',
      descricao: 'não sei',
      status: 'Pior',
      paciente_id: 1,
      prontuario_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Enfermidades', null, {});
    
  }
};
