"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class patientPrescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      patientPrescription.belongsTo(models.patient);
      patientPrescription.belongsTo(models.prescription);
    }
  }
  patientPrescription.init(
    {
      patientId: { type: DataTypes.INTEGER, allowNull: false },
      prescriptionId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "patientPrescription",
    }
  );
  return patientPrescription;
};
