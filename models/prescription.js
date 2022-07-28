"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      prescription.belongsToMany(models.patient, {
        through: "patientPrescriptions",
        foreignKey: "prescriptionId",
      });
    }
  }
  prescription.init(
    {
      name: { type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: false },
    },
    {
      sequelize,
      modelName: "prescription",
    }
  );
  return prescription;
};
