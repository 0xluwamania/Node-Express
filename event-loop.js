const {readFile} = require('fs');

// First Example
// console.log('started a task')

// readFile('./content/first.txt', 'utf8', (err, res) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(res)
//     console.log('completed first task')
// })
// console.log('starting next task');

//Second Example
console.log('first');
setTimeout(()=>{
    console.log('second')
}, 0);
console.log('thirdly');

// Third Example
let i = 2;
setInterval(() =>{
    console.log('hello World')
    console.log(i);
    i++;
}, (++i)*1000);
console.log(i);