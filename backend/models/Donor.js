const mongoose = require("mongoose");
const { Schema } = mongoose;

const DonorSchema = new Schema(
  {
    fullName: { type: String, required: true }, // String is shorthand for {type: String}
    age: String,
    gender: String,
    medicalId: String,
    bloodType: String,
    organs: String,
    weight: String,
    height: String,
    phone_Number: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);
const Donor = mongoose.model("Donor", DonorSchema);

module.exports = Donor;
