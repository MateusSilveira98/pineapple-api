const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200
  }
mongoose.connect('mongodb+srv://wtt:Wtt-1234@cluster0-e53qt.mongodb.net/test?retryWrites=true', 
    {
        useNewUrlParser: true
    }
);


app.use(cors(corsOptions));
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
   console.log('http://localhost:3000'); 
});
