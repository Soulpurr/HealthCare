const express = require("express");
const verifyUser = require("../middleware/verifyUser");

const Patients = require("../models/Patients");
const router = express.Router();
require("dotenv").config();
router.post("/addpatient", verifyUser, async (req, res) => {
  try {
    const {
      fullName,
      age,
      gender,
      medicalId,
      bloodType,
      organs,
      weight,
      height,
      phone_Number,
    } = req.body;
    let addData = await Patients.create({
      fullName,
      age,
      gender,
      medicalId,
      bloodType,
      organs,
      weight,
      height,
      phone_Number,
      user: req.user._id,
    });
    res.send(addData);
  } catch (error) {
    res.send(error);
  }
});
router.get("/getpatient", async (req, res) => {
  try {
    let donor=await Donor.find()
    res.send(donor);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;