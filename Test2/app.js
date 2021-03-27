//object properties and method
var obj = {
    greet: 'Hello'
}

console.log(obj.greet)
console.log(obj['greet'])

var a = 'greet'
console.log(obj[a])

//function and arrays
var arr = []

arr.push(function(){
    console.log('Hello World');
});


arr.push(function(){
    console.log('Hi World');
});


arr.push(function(){
    console.log('Chào World');
});

arr.forEach(function(item){
    item();
});

