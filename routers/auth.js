const { Router } = require("express");
const Patient = require("../models").patient;
const router = new Router();

// Feature 4
// http POST :4000/auth/signup firstName="Miriam" lastName="van den Bosch" gender="Female" dateOfBirth="1993-09-09" email="m@m.com" phoneNumber="0612345678"
router.post("/signup", async (req, res, next) => {
  try {
    const { firstName, lastName, gender, dateOfBirth, email, phoneNumber } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !dateOfBirth ||
      !email ||
      !phoneNumber
    ) {
      res.status(400).send({ message: "Missing some parameters." });
    } else {
      const newPatient = await Patient.create({
        firstName,
        lastName,
        gender,
        dateOfBirth,
        email,
        phoneNumber,
      });
      res.status(200).json(newPatient);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
