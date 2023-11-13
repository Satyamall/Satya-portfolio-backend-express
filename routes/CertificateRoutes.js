const express = require("express");

const CerificateController = require("../controllers/CerificateController");
const checkAuth = require("../middlewares/check-auth");
const uploadMulter = require("../middlewares/multer");
const router = express.Router();

router.post("/", checkAuth,  uploadMulter.single("certificateImage"), CerificateController.addCerificate);
router.get("/:cerificateId", CerificateController.getOneCerificate);
router.get("/", CerificateController.getAllCerificates);
router.delete("/:cerificateId",checkAuth, CerificateController.deleteCerificate);
router.put("/:cerificateId",checkAuth,  uploadMulter.single("certificateImage"), CerificateController.updateCerificate);

module.exports = router;
