
function  greet(){
    console.log('Test coi chạy không')
}

module.exports = greet;

'use strict';

var EvenEmitter = require('events');
// var util = require('util');

module.exports = class Greetr extends EvenEmitter{
    // Để chắc chắn 1 con trỏ của một Greetr có tất cả thuộc tính và phương thức của con trỏ của EvenEmitter
    //Chúng ta có thể gọi super constructor và truyền this đến nó.
    constructor(){
        super();
        this.greeting = 'Hello World!'
    }
    // EvenEmitter.call(this);
    // this.greeting = 'Hello world';
    greet(data){
        console.log(`${this.greeting} : ${data}`);// template literal
        this.emit('greet', data);
    }
}