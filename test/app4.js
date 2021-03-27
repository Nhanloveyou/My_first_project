function change(x){
    x = 2;
}
 y = 1;
 change(y);
console.log(y);

function changeObj(d){
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);