const { Book } = require('../models');
const { paginationSchema } = require('../validators/bookValidator');
const { bookSchema } = require('../validators/bookValidator');


// Fetch all books with pagination

exports.getBooks = async (req, res) => {
  try {
    const { error } = paginationSchema.validate(req.query);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await Book.findAndCountAll({
      limit,
      offset,
    });

    res.json({
      totalBooks: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      books: rows,
    });
  } catch (err) {
    console.error('Error fetching books:', err);
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


// Add a new book with validation
exports.addBook = async (req, res) => {
  try {
    // Validate req.body
    const { error, value } = bookSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Destructure validated values
    const { title, author, genre, publishedYear } = value;

    // Create a new book
    const book = await Book.create({ title, author, genre, publishedYear });
    res.status(201).json(book);
  } catch (err) {
    console.error('Error adding book:', err);
    res.status(400).json({ message: 'Error adding book' });
  }
};


// Update a book

exports.updateBook = async (req, res) => {
  try {
    const { error, value } = bookSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    await book.update(value);
    res.json({ message: 'Book updated successfully', book });
  } catch (err) {
    console.error('Error updating book:', err);
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
