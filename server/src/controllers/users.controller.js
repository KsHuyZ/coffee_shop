const userCtrl = {
  create: async (req, res) => {
    try {
      return res.status(200).json({ msg: "Hello World" });
    } catch (error) {
      console.log("error: ", error);
    }
  },
};
module.exports = userCtrl;
