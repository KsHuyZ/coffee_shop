const User = require("../models/UserModels");
const bcrypt = require("bcrypt");

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
const UserController = {
  getAllUser: async (req, res, next) => {
    try {
      const user = await User.find();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },

  getUserbyId: async (req, res, next) => {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  },

  register: async (req, res, next) => {
    const { email, password, name, address, phone, avatar, account_balance } =
      req.body;
    if (!email || !password || !name || !address || !phone) {
      return res.status(500).json({
        success: false,
        message: "Please enter all fill",
      });
    } else {
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "This email already exists." });
      }
      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters." });
      }
      if (!validateEmail(email)) {
        return res.status(400).json({ msg: "Invalid emails." });
      }
      const passwordHash = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        password: passwordHash,
        name,
        address,
        phone,
        avatar,
        account_balance,
      });
      newUser.save();
      return res.status(200).json({ success: true, message: "Create success" });
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "This email does not exist." });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Password is incorrect." });
      res.cookie("role", user.role, {
        expires: new Date(Date.now() + 900000),
      });

      return res.status(200).send("Cookie has been set");
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  editUser: async (req, res, next) => {
    const { name, address, phone, avatar, account_balance, role } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        {
          name,
          address,
          phone,
          avatar,
          account_balance,
          role,
        },
        {
          new: true,
        }
      );
      return res
        .status(200)
        .json({ success: true, message: "Update Success!!!?" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  deleteUser: async (req, res, next) => {
    const id = req.params.id;
    try {
      const user = await User.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Delete success" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};

module.exports = UserController;
