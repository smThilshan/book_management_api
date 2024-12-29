// const express = require('express');
// const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/bookController');
// const authMiddleware = require('../middleware/authMiddleware');
// const roleMiddleware = require('../middleware/roleMiddleware');

// const router = express.Router();

// router.get('/', authMiddleware, getAllBooks);
// router.get('/:id', authMiddleware, getBookById);
// router.post('/', authMiddleware, roleMiddleware('admin'), createBook);
// router.put('/:id', authMiddleware, roleMiddleware('admin'), updateBook);
// router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteBook);

// module.exports = router;


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
