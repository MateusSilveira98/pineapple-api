const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const config = require('./config.json');
const Callbacks = require('./src/_Helpers/Callbacks');
const JWT = require('./src/_Helpers/JWT');
const Routes = require('./src/Routes');

mongoose.connect(config.connectionString,
    {
        useNewUrlParser: true, useCreateIndex: true
    }
);


app.use(cors());
app.use(express.json());
app.use(JWT());
app.use(Routes);
app.use(Callbacks.errorHandler);
server.listen(3000, () => {
    console.log(`http://localhost:3000`);
});
