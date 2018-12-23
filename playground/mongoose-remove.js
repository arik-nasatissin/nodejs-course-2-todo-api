const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res)=>{
//     console.log(res);
// });

// Todo.findOneAndRemove
// Todo.findOneAndRemove({_id:'5c1f4c3b5c7ba0f7bf15acda'}).then((todo)=>{
//     console.log(todo);
// });

// Todo.findByIdAndRemove
// Todo.findByIdAndRemove('5c1f4c3b5c7ba0f7bf15acda').then((todo)=>{
//     console.log(todo);
// });