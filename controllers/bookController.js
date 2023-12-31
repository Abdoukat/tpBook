const Book = require('../models/bookModel');

const getBooks = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: "Livre non trouvé" })
    }
}

const getOneBook = async (req, res) => {
    try {
        const book = await Book.findOne({_id: req.params.id});
        res.status(200).json(book);
      } catch (error) {
        res.json({ message: "Livre non trouvé" });
      }
}

const addBook = async (req, res) => {
    const { title, reference, author } = req.body;
    try {
        const book = await Book({ title, reference, author });
        book.save().then((saveBook) => {
        res.status(201).json(saveBook);
        });
    } catch (error) {
        res
        .status(500)
        .json({ error: `Erreur lors de la sauvegarde du livre` });
    }
}

const updateBook = async (req, res) => {
    try {
        await Book.findOneAndUpdate(
          {
            _id: req.params.id
          },
          {
            "title": req.body.title,
            "reference": req.body.reference,
            "author": req.body.author
          }
        );
        res.status(201).json({message: "Book updated"});
      } catch (error) {
        res.json({ message: "Book non trouvé" });
      }
}

const deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete({ _id: req.params.id });
        res.status(201).json({message: "livre deleted"});
    } catch (error) {
        res.json({ message: "livre non trouvé" });
    }
}



module.exports = {getBooks, addBook, updateBook, deleteBook, getOneBook};