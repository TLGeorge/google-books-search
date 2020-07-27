const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    image: String,
    link: String
}
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;

