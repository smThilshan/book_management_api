const express = require('express');
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getAllBooks);
router.get('/:id', authMiddleware, getBookById);
router.post('/', authMiddleware, roleMiddleware('admin'), createBook);
router.put('/:id', authMiddleware, roleMiddleware('admin'), updateBook);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteBook);

module.exports = router;
