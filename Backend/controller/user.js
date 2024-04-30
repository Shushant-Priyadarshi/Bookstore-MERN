const User = require("../model/user");
const saltPass = require("salt-password");

const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "USER ALREADY EXISTS" });
    }

    const salt = saltPass.generateSalt(); // Generate a unique salt for each user
    const hashedPassword = saltPass.hashPassword(password, salt);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashedPassword,
      salt: salt, // Store the salt in the user document
    });
    await createdUser.save();
    res.status(201).json({
      message: "USER CREATED SUCCESSFULLY",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "INVALID USERNAME OR PASSWORD" });
    }

    const isPassValid = saltPass.verifyPassword(
      password,
      user.password,
      user.salt // Use the salt stored in the user document
    );

    if (!isPassValid) {
      return res.status(400).json({ message: "INVALID USERNAME OR PASSWORD" });
    } else {
      res.status(200).json({
        message: "LOGIN SUCCESSFUL",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = {
  signup,
  login,
};
