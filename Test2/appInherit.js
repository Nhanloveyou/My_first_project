'use strict';

// util.inherits(Greetr, EvenEmitter);// keys
var Greetr = require('/greet');

var data = 'Nhân'

// truyền dữ liệu

// Greetr.prototype.greet = function(data){
//     console.log(this.greeting + ': ' + data);
//     this.emit('greet', data);
// }

var greeter1 =  new Greetr();

greeter1.on('greet', function(){
    console.log('Lại là greet!' + data);
});

greeter1.greet('Nhân');