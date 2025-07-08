const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const getDataUri = require('../utils/dataURI');
const cloudinary = require('../utils/cloudinary');

exports.register = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !email || !password) {
      return res.status(401).json({
        success: false,
        message: "Something is missing.",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({
        success: false,
        message: "User already exist.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully.",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "Something is missing.",
      });
    }

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Account doesn't exist",
      });
    }

    const isPasswordMath = await bcrypt.compare(password, user.password);

    if (!isPasswordMath) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const tokenData = { userId: user._id };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      profilePicture: user.profilePicture,
      companyName: user.companyName,
      address: user.address,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json({
        success: true,
        user,
        message: `Welcome back ${user.firstname}`,
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.logout = async (req, res) => {
  try {
    return res.status(200).cookie(token, "", { maxAge: 0 }).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { firstname, lastname, email, phoneNumber, companyName, address } = req.body;
    const file = req.file;

    let cloudResponse;

    if(file){
      const fileUri = getDataUri(file);
      cloudResponse = await cloudinary.uploader.upload(fileUri.content)
    }

    const userId = req.user ? req.user.id : req.id

    let user = await User.findById(userId);

    if(!user){
      return res.status(401).json({
        success: false,
        message: "User not found"
      })
    }

    if(firstname) user.firstname = firstname
    if(lastname) user.lastname = lastname
    if(email) user.email = email
    if(phoneNumber) user.phoneNumber = phoneNumber
    if(companyName) user.companyName = companyName
    if(address) user.address = address
    if(file) user.profilePicture = cloudResponse?.secure_url;

    await user.save();

    user = {
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      companyName: user.companyName,
      address: user.address,
      profilePicture: user.profilePicture
    }


    return res.status(200).json({
      success: true,
      user,
      message: "Profile updated successfully"
    })
      
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

exports.profile = async(req, res) => {
  try{
      const userId = req.user ? req.user.id : req.id;

      const user = await User.findById(userId).select('-password');

      if(!user){
        return res.status(401).json({
          success: false,
          message: "User not found"
        })
      }

      return res.status(200).json({
        success: true,
        user,

      })
  }catch(err){
    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}