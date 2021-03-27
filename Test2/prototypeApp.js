var person = {
    firstname : '',
    lastname: '',
    greet: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var nhan = Object.create(person);
nhan.firstname = 'Nhân';
nhan.lastname = 'Đặng'

var lorion = Object.create(person);
lorion.firstname = 'Lorion';
lorion.lastname = 'Mid';

console.log(nhan.greet());
console.log(lorion.greet());