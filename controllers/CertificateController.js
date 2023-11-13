const Certificate = require("../models/CertificateModel");
const mongoose = require("mongoose");

const getOneCertificate = async (req, res, next) => {
  const id = req.params.certificateId;
  try {
    const certificate = await Certificate.findById(id);
    res.status(200).json(certificate);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCertificates = async (req, res, next) => {
  try {
    const certificates = await Certificate.find({});
    res.status(200).json(certificates);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addCertificate = async (req, res, next) => {
  const certificate = new Certificate({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    company: req.body.company,
    city: req.body.city,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description,
    technologies: req.body.technologies,
    link: req.body.link,
  });

  try {
    await certificate.save();
    res.status(201).json(certificate);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteCertificate = async (req, res, next) => {
  const id = req.params.certificateId;
  try {
    await Certificate.deleteOne({ _id: id });
    res.status(200).json({ message: "Certificate deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateCertificate = async (req, res, next) => {
  const id = req.params.certificateId;
  mongoose.set('useFindAndModify', false);
  Certificate.findByIdAndUpdate(
    id,
    {
      title: req.body.title,
      company: req.body.company,
      city: req.body.city,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      description: req.body.description,
      technologies: req.body.technologies,
      link: req.body.link,
    },
    function (err, certificate) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Certificate updated successfully", certificate });
      }
    }
  );
};

module.exports = {
  getOneCertificate,
  getAllCertificates,
  addCertificate,
  deleteCertificate,
  updateCertificate,
};
