const path = require('path');
const express = require("express");
const exphbs  = require('express-handlebars');
const morgan  = require("morgan");
const { render } = require('ejs');
const app = express();
const port = 3000;

const route = require('./routes')

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

//Routes init   
route(app);

// app.use(morgan("combined"));

//template engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
// app.set('views', path.join(__dirname, 'views'));


app.set('views', path.join(__dirname, 'resources/views'))

// console.log(__dirname)



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));