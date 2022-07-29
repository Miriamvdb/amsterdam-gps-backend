const { Router } = require("express");
const Doctor = require("../models").doctor;
const router = new Router();

// Feature 3 - GET all doctors - http GET :4000/doctors
router.get("/", async (req, res, next) => {
  try {
    const allDoctors = await Doctor.findAll();
    res.send(allDoctors);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
