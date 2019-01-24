'use strict';

var routes = require('./REST/routes');
var cors = require('cors');
var express = require('express');
// var morgan = require('morgan');
// var bodyParser = require('bodyParser');
var mongoose = require('mongoose');
var config = require('./config');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true}, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log('Connect with database established');
    }
});
process.on('SIGINT', () => {
    mongoose.connection.close(function () {
        console.error('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

routes(app);
app.listen(config.port, () => {
    console.info(`Server is running at ${config.port}`)
});