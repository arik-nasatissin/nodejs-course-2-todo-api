const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5c1b8dcf966d87c43c1d84fe';
//
// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
//
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo)=>{
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }).catch((e)=>{
//     console.log(e);
// });

let userId = '5c1b5df5568889c82faacc72';

User.findById(userId).then((todo)=>{
    if (!todo){
        return console.log('User not found');
    }
    console.log('User', todo);
},(e)=>{
    console.log(e);
});