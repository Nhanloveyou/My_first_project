var person = {
    firstname: 'Nhân',
    lastname: 'Đặng',
    greet: function(){
        console.log('Hello from '+ this.firstname + ' ' + this.lastname);
    }
}

person.greet();

console.log(person['firstname']);