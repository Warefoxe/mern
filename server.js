const express = require('express');

const Accessories = require('./models/accessoriesModel');

const app = express();
const db = require('./db');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server working " + port);
})

app.get('/getaccessories', (req, res) => {
    Accessories.find({}, (err, docs) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(docs);
        }
    })
})

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port`);