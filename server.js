const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/', { newUrlParser: true }).then(
    () => { console.log("connection ready")},
    (err) => { console.log(err)}
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('./Citizen', citizen);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
