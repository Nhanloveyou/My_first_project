function person(firstname, lastname){
 this.firstname = firstname;
 this.lastname = lastname;   
}

person.prototype.greet = function(){
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

var Nhan  = new person('Nhân','Đặng');
Nhan.greet();

var keera  = new person('Keera', 'Nguyễn');