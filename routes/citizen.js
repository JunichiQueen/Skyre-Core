const express = require('express');
const router = express.Router();
const Citizen = require('../models/citizenSchema');

router.get('/getCitizens?forenames=jun&surname=Awesomo&', (req, res) => {
    Citizen.find()
    .then(citizens => {
        if (!citizens) {
            errors.noCitizens = "There are no citizens";
            res.status(404).json(errors);
        }
        res.json(citizens);
    })
    .catch(err => console.log(err));    
});

module.exports = router;