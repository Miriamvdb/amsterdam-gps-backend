const { patient, prescription, patientPrescription } = require("./models");

// 0. Many to many queries
// 1. Get all patients with corresponding prescription
const allPatientsWithPrescriptions = async () => {
  const allPatients = await patient.findAll({ include: [prescription] });
  return allPatients.map((patients) => patients.get({ plain: true }));
};

allPatientsWithPrescriptions().then((patients) =>
  console.log("All patients with prescription(s): ", patients)
);

// 2. Get patient by id with corresponding prescription
const patientWithPrescriptions = async (id) => {
  const patients = await patient.findByPk(id, { include: [prescription] });
  return patients.get({ plain: true });
};

patientWithPrescriptions(2).then((patient) =>
  console.log("Patient with prescription(s): ", patient)
);
