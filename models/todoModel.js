var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Creates the Schema for our Todo list
var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

// Creates the model, which can manage CRUD operations on the database and create new objects
var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;