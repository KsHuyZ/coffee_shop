const Book = require("../models/BookModel");
const BookController = {
  getAllBook: async (req, res, next) => {
    try {
      const book = await Book.find({}).populate("categorybook");
      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).json({
       error: error.message 
      });
    }
  },

  getBookbyId: async (req, res, next) => {
    const book = await Book.findById(req.params.id).populate("categorybook");
    res.status(200).json(book);
  },

  createBook: async (req, res, next) => {
    const {
      name,
      author,
      categorybook,
      quantity,
      price_buy,
      img,
      img_invole,
      price_rent,
      title,
      description,
    } = req.body;
    if (
      !name ||
      !author ||
      !categorybook ||
      !quantity ||
      !price_buy ||
      !price_rent ||
      !title 
     
    ) {
      return res.status(500).json({
        success: false,
        message: "Please enter all fill",
      });
    } else {
      const book = new Book({
        name,
        author,
        categorybook,
        quantity,
        price_buy,
        img,
        img_invole,
        price_rent,
        title,
        description,
      });
      book.save();
      res.status(200).json({success: true, message: "Create book success!"})
    }
  },

  editBook: async (req, res, next) => {
    const {
      name,
      author,
      categorybook,
      quantity,
      price_buy,
      img,
      img_invole,
      price_rent,
      title,
      description,
      feedback,
    } = req.body;
    try {
      const book = await Book.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        {
          name,
          author,
          categorybook,
          quantity,
          price_buy,
          img,
          img_invole,
          price_rent,
          title,
          description,
          feedback,
        },
        {
          new: true,
        }
      );
      res.status(200).json({ success: true, message: "Update Success!!!?" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteBook: async (req, res, next) => {
    const id = req.params.id;
    try {
      const book = await Book.findByIdAndDelete(id);
      res.status(200).json({success: true, message:"Delete success"})
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = BookController;
