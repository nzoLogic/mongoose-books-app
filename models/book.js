var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  image: String,
  releaseDate: String
});

var CharacterSchema = new Schema({
  name: String
})
var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
