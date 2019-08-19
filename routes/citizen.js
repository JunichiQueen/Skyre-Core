const express = require('express');
const router = express.Router();
//const Citizen = require('../models/citizenSchema');
const querystring = require('querystring');
const requestify = require('requestify');
const axios = require('axios');

router.get('/getCitizens/:entry', (req, res) => {
    let appender = req.params.entry;
    
    axios
    .get(`http://localhost:8081/Citizen/getCitizens?${appender}`)
    .then(response => {
        res.json(response.data);
    }).catch(err => {
        console.log(err);
    });
 
});

module.exports = router;
