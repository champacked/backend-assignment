// ****** Importing ****** //
const mongoose = require("mongoose");

// ****** Defining Report Schema ****** //
const reportSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    status: {
      type: String,
      required: true,
      enum: ["Resting", "Walking", "Running", "Cycling"],
    },

    date: {
      type: Date,
      default: Date.now,
      required: true,
    },

    heartRate: {
      type: Number,
      required: true,
    },

    oxygenSaturation: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
