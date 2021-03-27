function greet(){
    console.log("hello");
}
greet();

function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression
var greetMe = function(){
    console.log('Hi everyone');
}
greetMe();

//it's a firsts-class
logGreeting(greetMe);

logGreeting(function(){
    console.log('I am Nhan');
})