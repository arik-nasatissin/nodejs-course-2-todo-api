const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';
//
// bcrypt.genSalt(10, (error, salt)=>{
//     bcrypt.hash(password, salt, (err, hash)=>{
//         console.log(hash);
//     });
// });

let hashedPass = '$2a$10$OHAQhLpCjQYaOpBiWHePSOpvsCO9vKvvZooXjy2Y.IZo9eiBDjCW.';

bcrypt.compare(password, hashedPass, (err, res)=>{
    console.log(res);
});

// let data = {
//     id: 9
// };
//
// let token = jwt.sign(data, 'bla');
// console.log(token);
//
// let decoded = jwt.verify(token, 'bla');
// console.log(decoded);
//
// let message = 'i am user no. 1';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// let data = {
//     id: 4
// };
//
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (token.hash === resultHash){
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }