// const {iphone, sayHi} = require('./utils')
// const names = require('./names')
// sayHi('adewunmi')
// console.log(module)


const EventEmitter = require('events')

const customEmitter = new EventEmitter;
customEmitter.on('response', (name,id) =>{
    console.log(`data received with name ${name} and id ${id}`)
})
customEmitter.on('response', () =>{
    console.log('data processing')
})

for (let i = 0; i < 5; i++){
    if(i <= 2){
        customEmitter.emit('response','ade', 92);
    }
}