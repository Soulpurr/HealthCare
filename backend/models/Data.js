const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema(
  {
    hospitalName: { type: String, required: true }, // String is shorthand for {type: String}
    bedsAvailable: String,
    state: String,
    city: String,
    address: String,
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
const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
