var mongoose = require('mongoose');
var schema = mongoose.Schema;

//create a new book schema

var BookSchema = new schema({
  title: String,
  author: String,
  image: String,
  releaseDate: String
});

//create a book model

var Book = mongoose.model('Book', BookSchema);

//export Book module

module.exports = Book;
