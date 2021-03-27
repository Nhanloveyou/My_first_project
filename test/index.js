// const express = require('express')
// const app = express()
// const port = 3000
// //Định nghĩa route
// app.get('/', (req, res) =>{
//   res.send('Hello World')
// })
// //127.0.0.1- localhost
// app.listen(port, () => console.log(`Ví dụ đang được mở ở cổng: http://localhost:${port}`))

// var a =1;
// var b =2;
// var c = a + b;
// console.log(c)

var english  = require('./english');
var japan = require('./japan');

module.exports = {
    english: english,
    japan: japan
}