const DbConnect = require("../connection/Connect");
const multer = require("multer");

// insert skills from admin panel to database,
// add data
const imgconfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: imgconfig }).single("skill_icon");

const addSkills = async (req, res) => {
  try {
    const skill_icon = req.file ? req.file.filename : "";

    console.log(skill_icon);
    const { skill_name, skill_level, skill_category } = req.body;
    console.log(req.body);

    const que =
      "INSERT INTO pm_skills (skill_name,skill_icon,skill_level,skill_category)VALUES (?,?,?,?)";
    const data = [skill_name, skill_icon, skill_level, skill_category];

    DbConnect.query(que, data, (err, data) => {
      if (err) {
        console.error("Error adding skill to database:", err.message);
        return res.status(500).json({ error: "Error while adding skill" });
      }
      return res.json(data);
    });
  } catch (error) {
    console.error("Error adding skill:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// get data from database
const getSKill = async (req, res) => {
  const que = "SELECT * FROM pm_skills";

  DbConnect.query(que, (err, data) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Error from adding user logic" });
    }
    return res.json(data);
  });
};

// delete data
const deleteSkill = async (req, res) => {
  const id = req.params.id;

  const que = "DELETE FROM pm_skills WHERE skill_id = ?";

  DbConnect.query(que, [id], (err, data) => {
    if (err) {
      console.error("Error Deleting skill :", err.message);
      return res.status(500).json({ error: "Error while Delete skill" });
    }
    console.log("Skill d eleted successful");
    return res.json(data);
  });
};

// update data

module.exports = { addSkills, getSKill, deleteSkill };
