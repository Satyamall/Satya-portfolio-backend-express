const express = require("express");

const CertificateController = require("../controllers/CertificateController");
const checkAuth = require("../middlewares/check-auth");
const uploadMulter = require("../middlewares/multer");
const router = express.Router();

router.post("/", checkAuth,  uploadMulter.single("certificateImage"), CertificateController.addCertificate);
router.get("/:cerificateId", CertificateController.getOneCertificate);
router.get("/", CertificateController.getAllCertificates);
router.delete("/:cerificateId",checkAuth, CertificateController.deleteCertificate);
router.put("/:cerificateId",checkAuth,  uploadMulter.single("certificateImage"), CertificateController.updateCertificate);

module.exports = router;
