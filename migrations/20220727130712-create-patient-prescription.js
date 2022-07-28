"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("patientPrescriptions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // relation patient belongToMany prescription
      patientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // + references, onUpdate & onDelete
        references: {
          model: "patients",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      // relation prescription belongToMany patient
      prescriptionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // + references, onUpdate & onDelete
        references: {
          model: "prescriptions",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("patientPrescriptions");
  },
};
