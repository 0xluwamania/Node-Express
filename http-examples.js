const http = require('http');

const server = http.createServer((req,res)=>{
console.log('request event');
res.send('Hello World')
});

server.listen(5000, ()=> {
    console.log('Server listening on port: 5000')
})

const http = require('http');

//Second Example

// const server = http.createServer((req,res)=>{
// // console.log('request event');
// // res.end('./content/first.txt')
// if (req.url === '/'){
//     res.end('Home Page');
// }
// else if (req.url === '/about'){
//     for (let i = 0; i < 10000; i++){
//         for (let j = 0; j < 10000; j++){
//             console.log(`${i}, ${j}`);
//         }
//     }
//     res.end('About Page');
// }
// else {res.end('Error. Page Not Available')}
// });

// server.listen(5000, ()=> {
//     console.log('Server listening on port: 5000')
// })