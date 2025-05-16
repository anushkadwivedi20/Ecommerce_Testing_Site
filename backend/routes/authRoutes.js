const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/signup", registerUser);
router.post("/login", loginUser);

// router.post("/auth/signup", async (req, res) => {
//   const { name, email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ name, email, password: hashedPassword });
//   await newUser.save();
//   res.json({ message: "User registered successfully" });
// });

// router.post("/auth/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) return res.status(404).json({ message: "User not found" });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//   res.json({
//     message: "Login successful",
//     user: { id: user._id, name: user.name },
//   });
// });

module.exports = router;
