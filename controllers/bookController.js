// const { Book } = require('../models');

// exports.getAllBooks = async (req, res) => {
//     const { page = 1, limit = 10 } = req.query;
//     const books = await Book.findAll({ limit, offset: (page - 1) * limit });
//     res.json(books);
// };

// exports.getBookById = async (req, res) => {
//     const book = await Book.findByPk(req.params.id);
//     res.json(book);
// };

// exports.createBook = async (req, res) => {
//     const { title, author, genre, publishedYear } = req.body;
//     const book = await Book.create({ title, author, genre, publishedYear });
//     res.status(201).json(book);
// };

// exports.updateBook = async (req, res) => {
//     const { title, author, genre, publishedYear } = req.body;
//     await Book.update({ title, author, genre, publishedYear }, { where: { id: req.params.id } });
//     res.json({ message: 'Book updated' });
// };

// exports.deleteBook = async (req, res) => {
//     await Book.destroy({ where: { id: req.params.id } });
//     res.json({ message: 'Book deleted' });
// };


// controllers/bookController.js
const { Book } = require('../models');

// Fetch all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books' });
  }
};

// Fetch book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching book' });
  }
};

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;
    const book = await Book.create({ title, author, genre, publishedYear });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: 'Error adding book' });
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    
    await book.update({ title, author, genre, publishedYear });
    res.json({ message: 'Book updated successfully', book });
  } catch (err) {
    res.status(400).json({ message: 'Error updating book' });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    
    await book.destroy();
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting book' });
  }
};
