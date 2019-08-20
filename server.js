const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const citizen = require('./routes/citizen');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/Citizen', citizen);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
