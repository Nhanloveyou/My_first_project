var Emiiter = require('events');

var emtr = new Emiiter();

emtr.on('greet', function(){
    console.log('Hi nodejs');
});

emtr.on('greet', function(){
    console.log('I am Nhân');
})

console.log('Hello!');

emtr.emit('greet');