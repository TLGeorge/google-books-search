const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: Array,
    description: String,
    image: String,
    link: String
}
);

module.exports = BookSchema;

