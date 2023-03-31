const express = require("express");
const verifyUser = require("../middleware/verifyUser");

const Donor = require("../models/Donor");
const router = express.Router();
require("dotenv").config();
router.post("/adddonor", verifyUser, async (req, res) => {
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
    let addData = await Donor.create({
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
router.get("/getdonor", async (req, res) => {
  try {
    let donor=await Donor.find()
    res.send(donor);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
