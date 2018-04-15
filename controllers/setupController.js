var Todos = require('../models/todoModel');

module.exports = function(app) {
    // Whenever users access this endpoint, we will create more and more seed data
    app.get('/api/setupTodos', function(req, res){
        //seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn node',
                isDone: false,
                hasAttachment: false
            }
        ];
        
        // Creates our documents (persisting this seed array), and returns results to the client
        // We'll actually output the results on the client screen
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });
};