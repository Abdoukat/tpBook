const router = require('express').Router();
const {getBooks, addBook, updateBook, deleteBook, getOneBook} = require('../controllers/bookController');

router.get('/', getBooks);
router.get('/:id', getOneBook);
router.post('/create', addBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;