var obj = {
    fullname: 'Khoa Vo',
    greet: function(){
        console.log(`Hello $`)
    }
}

obj.greet();

//call
obj.greet.matchAll({fullname: 'Keane Vo'}, param1, param2);

//.apply, pass an array
obj.greet.apply({fullname: ''})