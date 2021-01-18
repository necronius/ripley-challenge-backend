const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log("Conectado a la base de datos.");    
}).catch(err => {
    console.log('No se pudo conectar a la base de datos.', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Desafío Ripley Backend"});
});

require('./app/routes/product.routes.js')(app);

// listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API iniciada en puerto ${ PORT }`);
});