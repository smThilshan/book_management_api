const { Book } = require('../models');

exports.getAllBooks = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const books = await Book.findAll({ limit, offset: (page - 1) * limit });
    res.json(books);
};

exports.getBookById = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    res.json(book);
};

exports.createBook = async (req, res) => {
    const { title, author, genre, publishedYear } = req.body;
    const book = await Book.create({ title, author, genre, publishedYear });
    res.status(201).json(book);
};

exports.updateBook = async (req, res) => {
    const { title, author, genre, publishedYear } = req.body;
    await Book.update({ title, author, genre, publishedYear }, { where: { id: req.params.id } });
    res.json({ message: 'Book updated' });
};

exports.deleteBook = async (req, res) => {
    await Book.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Book deleted' });
};
