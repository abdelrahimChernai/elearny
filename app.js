const express = require('express');
const app = express();

require('dotenv').config();

// connection to DB ...
const db = require('./connexion');

// configs for model ...
app.use(express.urlencoded({ extended: true })); // allow the server to recive json files
app.use(express.json());

// routes & midlwares ....
const routes = require('./Routes/coursesRoutes');
const authRoute = require('./Routes/authUser');
app.use('/api/courses', routes);
app.use('/api', authRoute);

const port = 3000 || process.env.PORT;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/res/images'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
	res.render('login');
});

app.listen(port, () => {
	console.log('server is up & running in port ... ');
});

/* 

    "title": "new title",
    "category": "marketing",
    "description": "desription of the course",
    "price": "3000da"



    {  
    "email": "himou@gmail.com",
    "username": "himou",
    "password": "123",
    "type": "student"

}

    "password": "123",
    "email": "youcefbmz@gmail.com"

    */
