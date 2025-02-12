// ****** Importing Models ****** //
const Doctor = require("../../../models/doctorModel");
const Patient = require("../../../models/patientModel");
const Report = require("../../../models/reportModel");

module.exports.create_report = async function (req, res) {
  console.log("Inside report controller");

  try {
    console.log("Inside try");

    // ****** Getting Doctor ID from request body instead of req.doctor._id ****** //
    const doctor = req.body.doctor;
    const patient = req.params.id;

    const report = await Report.create({
      doctor: doctor,
      patient: patient,
      status: req.body.status,
      heartRate: req.body.heartRate,
      oxygenSaturation: req.body.oxygenSaturation,
    });

    return res.status(201).json({
      success: true,
      report,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
};

// ****** Find Patient by ID and Send Report ****** //
module.exports.all_reports = async function (req, res) {
  try {
    const reports = await Report.find({ patient: req.params.id }).populate(
      "doctor patient"
    );
    return res.status(200).json(reports);
  } catch (err) {
    return res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
};

// ****** Send Report By Status ****** //
module.exports.report_by_status = async (req, res) => {
  try {
    const reports = await Report.find({ status: req.params.status }).populate(
      "doctor patient"
    );
    return res.status(200).json(reports);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
