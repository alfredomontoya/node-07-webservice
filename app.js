const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir static content
app.use( express.static('public') );

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Alfredo montoya',
        titulo: 'Curso de node'
    });
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Alfredo montoya',
        titulo: 'Curso de node'
    });
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Alfredo montoya',
        titulo: 'Curso de node'
    });
})

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html')
})

app.listen( port , () => {
    console.log(`aplicacion corriendo en puerto: ${port}`);
});