const { Router } = require("express");
const Patient = require("../models").patient;
const router = new Router();

// Feature 5: GET all patients - http GET :4000/patients
router.get("/", async (req, res, next) => {
  try {
    const allPatients = await Patient.findAll();
    res.send(allPatients);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
