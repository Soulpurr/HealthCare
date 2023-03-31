const express = require("express");
const verifyUser = require("../middleware/verifyUser");
const Data = require("../models/Data");

const router = express.Router();
router.post("/createData", verifyUser, async (req, res) => {
  try {
    const { hospitalName, bedsAvailable, state, city, address, phone_Number } =
      req.body;
    let addData = await Data.create({
      hospitalName,
      bedsAvailable,
      state,
      city,
      address,
      phone_Number,
      user: req.user._id,
    });
    res.send(addData);
  } catch (error) {
    res.send(error);
  }
});
router.post("/deleteData/:id", verifyUser, async (req, res) => {
  try {
    const { id } = req.params;
    const notes = await Data.findById(id);
    console.log(id, notes._id.toString());
    if (notes) {
      if (notes._id.toString() == id) {
        await Data.findByIdAndDelete(id);
        return res.send({ message: "Deleted sucessfully", success: true });
      }
      return res.send({ message: "Invalid", success: false });
    }
    return res.send({ message: "Error", success: false });
  } catch (error) {
    res.send({ message: error, success: false });
  }
});
router.post("/editData/:id", verifyUser, async (req, res) => {
  try {
    const { id } = req.params;
    let notes = await Data.findById(id);
    if (notes) {
      const {
        hospitalName,
        bedsAvailable,
        state,
        city,
        address,
        phone_Number,
      } = req.body;
      const saved = {
        hospitalName,
        bedsAvailable,
        state,
        city,
        address,
        phone_Number,
      };
      notes = await Data.findByIdAndUpdate(id, { $set: saved }, { new: true });
      return res.send({ message: "Edited sucessfully", success: true });
    }
    return res.send({ message: "Invalid", success: false });
  } catch (error) {
    res.send(error);
  }
});

router.get("/fetchData/:state", async (req, res) => {
  try {
    let data = await Data.find({ state: req.params.state });
    res.send(data);
  } catch (error) {
    res.send("Failed");
  }
});
router.post("/addDonor", async (req, res) => {
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
    let addData = await Data.create({
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

module.exports = router;
