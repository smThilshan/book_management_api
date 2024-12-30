const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const { getBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookController');

// Public Routes (Accessible to all authenticated users)
router.get('/', authenticate, getBooks);
router.get('/:id', authenticate, getBookById);

// Admin Routes (Only accessible to admins)
router.post('/', authenticate, authorize(['admin']), addBook);
router.put('/:id', authenticate, authorize(['admin']), updateBook);
router.delete('/:id', authenticate, authorize(['admin']), deleteBook);

module.exports = router;
