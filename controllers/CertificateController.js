const Cerificate = require("../models/CerificateModel");
const mongoose = require("mongoose");

const getOneCerificate = async (req, res, next) => {
  const id = req.params.cerificateId;
  try {
    const cerificate = await Cerificate.findById(id);
    res.status(200).json(cerificate);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllCerificates = async (req, res, next) => {
  try {
    const cerificates = await Cerificate.find({});
    res.status(200).json(cerificates);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addCerificate = async (req, res, next) => {
  const cerificate = new Cerificate({
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
    await cerificate.save();
    res.status(201).json(cerificate);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteCerificate = async (req, res, next) => {
  const id = req.params.cerificateId;
  try {
    await Cerificate.deleteOne({ _id: id });
    res.status(200).json({ message: "Cerificate deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateCerificate = async (req, res, next) => {
  const id = req.params.cerificateId;
  mongoose.set('useFindAndModify', false);
  Cerificate.findByIdAndUpdate(
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
    function (err, cerificate) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Cerificate updated successfully", cerificate });
      }
    }
  );
};

module.exports = {
  getOneCerificate,
  getAllCerificates,
  addCerificate,
  deleteCerificate,
  updateCerificate,
};
