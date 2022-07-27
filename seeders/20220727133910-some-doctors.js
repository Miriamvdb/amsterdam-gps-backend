"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "doctors",
      [
        {
          id: 1,
          doctor: "Dr. Coventry",
          email: "ecoventry@amspractice.nl",
          onDuty: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          doctor: "Dr. Adenet",
          email: "radenet@amspractice.nl",
          onDuty: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          doctor: "Dr. Tollady",
          email: "atollady@amspractice.nl",
          onDuty: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("doctors", null, {});
  },
};
