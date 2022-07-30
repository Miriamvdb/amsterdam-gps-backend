"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      patient.belongsTo(models.doctor, { foreignKey: "doctorId" });
      patient.belongsToMany(models.prescription, {
        through: "patientPrescriptions",
        foreignKey: "patientId",
      });
    }
  }
  patient.init(
    {
      idnr: { type: DataTypes.BIGINT, allowNull: true },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      gender: { type: DataTypes.STRING, allowNull: false },
      dateOfBirth: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      phoneNumber: { type: DataTypes.STRING, allowNull: false },
      doctorId: { type: DataTypes.INTEGER, allowNull: true },
    },
    {
      sequelize,
      modelName: "patient",
    }
  );
  return patient;
};
