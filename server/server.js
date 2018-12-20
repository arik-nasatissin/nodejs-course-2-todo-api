const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();
app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
    let newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res)=>{
    Todo.find({}).then((todos)=>{
        res.send({todos});
    }, (err)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req,res)=>{
    let todoId = req.params.id;
    if (!ObjectID.isValid(todoId)){
        return res.status(404).send();
    }

    Todo.findById(todoId).then((todo)=>{
        if (!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        return res.status(400).send();
    });
});

app.listen(3000, ()=>{
    console.log('Started on port 3000');
});

module.exports = {app};