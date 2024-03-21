const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const DbConnect = require("../connection/Connect");

// ADD data in database from login signup Form

// sign logic
const addUser = async (req, res) => {
  const { firstname, email, password, mobile_no } = req.body;
  const currentDate = new Date();
  const date = currentDate.toISOString();
  const saltRound = await bcrypt.genSalt(10);
  console.log("Generated salt:", saltRound);
  console.log(password, "original", 15);
  const hash_password = await bcrypt.hash(password, saltRound);

  console.log(hash_password, "hashedPassword", 17);
  const que =
    "INSERT INTO pm_user (firstname , email, password, mobile_no, registration_date_time) VALUES (? , ? , ? , ?, ?)";
  const data = [firstname, email, hash_password, mobile_no, date];

  DbConnect.query(que, data, async (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Error from adding user logic" });
    }

    try {
      const otp = Math.floor(100000 + Math.random() * 900000);
      console.log(otp, 30);

      const token = jwt.sign({ email, otp }, process.env.JWT_SECRET_TOKEN, {
        expiresIn: "30d",
      });

      // Save the token and OTP in localStorage

      await registationEmail(email, firstname, otp); // for sending gmail
      return res.json({
        success: "User added successfully. Registration email sent.",
        token,
        otp,
      });
    } catch (emailError) {
      console.error(emailError.message, 28);
      return res
        .status(500)
        .json({ error: "Error sending registration email" });
    }
  });
};

// login logic

const checkUser = async (req, res) => {
  const { email, password, otp } = req.body;

  console.log(req.body, 56);

  const que = "SELECT * FROM pm_user WHERE email = ?";
  const userData = [email];

  DbConnect.query(que, userData, async (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "error from login user logic" });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    // compairring password and checking otp in login

    const comparePassword = result[0].password;
    console.log(comparePassword, 73);

    const checkOTP = result[0].otp;
    console.log(checkOTP, 77);
    if (checkOTP === undefined) {
      return res.status(400).json({ message: "Stored OTP not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, comparePassword);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password Didn't mache" });
    }

    if (otp !== checkOTP) {
      return res.status(400).json({ message: "Invalid otp" });
    }

    const token = jwt.sign({ email, otp }, process.env.JWT_SECRET_TOKEN, {
      expiresIn: "30d",
    });

    return res.json({
      success: "Login successful",
      token,
    });
  });
};

// sending mail on registration email
const registationEmail = async (email, firstname, otp) => {
  try {
    console.log(otp, 102, "otp");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MyEmail,
        pass: process.env.PASSWORD_FOR_GMAIL,
      },
    });
    const mailOptions = {
      from: process.env.MyEmail,
      to: email,
      subject: "Welcome to our Website",
      text: `Dear  ${firstname},  Your otp for login is ${otp}  \n\nThank you for registering on Your App.`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Error sending OTP");
  }
};

// getting usersData

const getUser = async (req, res) => {
  const que = "SELECT * FROM pm_user";

  DbConnect.query(que, (err, data) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Error from adding user logic" });
    }
    return res.json(data);
  });
};

// deleting user data

const deletUser = async (req, res) => {
  const id = req.params.id;
  const que = "DELETE FROM pm_user WHERE user_id = ? ";

  DbConnect.query(que, [id], (err, data) => {
    if (err) {
      console.error("Error deleting record:", err);
      return res.status(500).json({ error: "Failed to delete record" });
    }
    console.log("Record deleted successfully");
    return res.json(data);
  });
};

module.exports = { addUser, checkUser, getUser, deletUser };
