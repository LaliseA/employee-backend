const router = require("express").Router();
const User = require("../models/user");
const CryptoJs = require("crypto-js");
/*ADD A USER */

router.post("/signup", async (req, res) => {
  const newUser = new user({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_SEC
    ).toString(),
  });

  try {
    const saveUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong email or username");

    const encryptedPassword = CryptoJS.AES.decrypt();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
