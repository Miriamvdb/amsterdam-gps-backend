"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "patientPrescriptions",
      [
        {
          patientId: 1,
          prescriptionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 2,
          prescriptionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 2,
          prescriptionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 4,
          prescriptionId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 4,
          prescriptionId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 4,
          prescriptionId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 5,
          prescriptionId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 6,
          prescriptionId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 6,
          prescriptionId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 8,
          prescriptionId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 9,
          prescriptionId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 9,
          prescriptionId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          patientId: 10,
          prescriptionId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("patientPrescriptions", null, {});
  },
};
