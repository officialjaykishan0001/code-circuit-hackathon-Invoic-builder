const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/isAuth");
const { singleUpload } = require("../middlewares/multer");

const {
  register,
  login,
  updateProfile,
  profile,
  logout,
} = require("../controllers/user.controller");

router.post("/register", register);
router.post("/login", login);
router.post("/profile/update", isAuthenticated, singleUpload, updateProfile);
router.get('/profile', isAuthenticated, profile)
router.get('/logout', logout)
module.exports = router;
