var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");
//    exports.Name = require(locationOfExport)
module.exports.Book = require("./book.js");
//    exports.Name = require(locationOfExport)
module.exports.Author = require("./author.js");
