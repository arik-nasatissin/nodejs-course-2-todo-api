// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c1a1574c20cd6c6dd272301')
    // }).toArray().then((documents)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(documents, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log('Todos');
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'ArikN'}).toArray().then((documents)=>{
        console.log('Users');
        console.log(JSON.stringify(documents, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });


    //db.close();
});