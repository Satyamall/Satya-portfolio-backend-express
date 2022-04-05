const express = require("express");

const ExperienceController = require("../controllers/ExperienceController");
const checkAuth = require("../middlewares/check-auth");
const uploadMulter = require("../middlewares/multer");
const router = express.Router();

router.post("/", checkAuth,  uploadMulter.single("certificateImage"), ExperienceController.addExperience);
router.get("/:experienceId", ExperienceController.getOneExperience);
router.get("/", ExperienceController.getAllExperiences);
router.delete("/:experienceId",checkAuth, ExperienceController.deleteExperience);
router.put("/:experienceId",checkAuth,  uploadMulter.single("certificateImage"), ExperienceController.updateExperience);

module.exports = router;
