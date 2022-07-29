const express = require("express");
const cors = require("cors");

const doctorRouter = require("./routers/doctor");
// const patientRouter = require("./routers/patient");
// const prescriptionRouter = require("./routers/prescription");

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/doctors", doctorRouter);
// app.use("/patients", patientRouter);
// app.use("/prescriptions", prescriptionRouter);

app.listen(PORT, () => console.log(`Server running on port :${PORT}`));
