const express = require("express");
const router = express.Router();
const multer = require("multer");
const skills = require("../controllers/skills");

const imgconfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: imgconfig });

router.route("/postskill").post(upload.single("skill_icon"), skills.addSkills);
router.route("/getskills").get(skills.getSKill);
router.route("/deleteskills/:id").delete(skills.deleteSkill);

module.exports = router;
