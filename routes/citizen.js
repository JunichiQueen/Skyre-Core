const express = require('express');
const router = express.Router();
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

//under construction
router.get('/getFinance/:entry', (req, res) => {
    let appender = req.params.entry;
    
    axios
    .get(`http://localhost:8083/Finance/getFinance?${appender}`)
    .then(response => {
        res.json(response.data);
    }).catch(err => {
        console.log(err);
    });
});

//under construction
router.get('/getMobile/:entry', (req, res) => {
    let appender = req.params.entry;
    
    axios
    .get(`http://localhost:8081/Mobile/getMobile?${appender}`)
    .then(response => {
        res.json(response.data);
    }).catch(err => {
        console.log(err);
    });
});

//under construction
router.get('/getVehicle/:entry', (req, res) => {
    let appender = req.params.entry;
    
    axios
    .get(`http://localhost:8081/Vehicle/getVehicle?${appender}`)
    .then(response => {
        res.json(response.data);
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;
