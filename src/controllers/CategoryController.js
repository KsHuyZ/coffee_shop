const Category = require("../models/CategoryModel");
const CategoryController = {
  getAllCategory: async (req, res, next) => {
    try {
      const category = await Category.find({});
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },

  getCategorybyId: async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  },

  // create category
  createCategory: async (req, res, next) => {
    const { name, title, iconcategory } = req.body;
    if (!name || !title) {
      return res.status(500).json({
        success: false,
        message: "Please enter all fill",
      });
    } else {
      const category = new Category({
        name,
        title,
        iconcategory,
      });
      category.save();
     return res.status(200).json({ success: true, message: "Update success" });
    }
  },

  editCategory: async (req, res, next) => {
    const { name, title, iconcategory } = req.body;
    try {
    await Category.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        {
          name,
          title,
          iconcategory,
        },
        {
          new: true,
        }
      );
      res.status(200).json({ success: true, message: "Update Success!!!?" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  deleteCategory: async (req, res, next) => {
    const id = req.params.id;
    try {
    await Category.findByIdAndDelete(id);
      res.status(200).json({success: true, message: "Misson Success"})
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};

module.exports = CategoryController;
