////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////

const express = require('express');
// const Basic = require('../models/Basic')
const router = express.Router();
// const mongoose = require("mongoose");

// ROUTES////////////////////////////////

//get
router.get('/', async(req, res) => {
    res.json({message: "hello"})
})

//post
router.post('/', async(req, res) => {
    res.json({message: "POST"})
})

//put
router.put('/:id', async(req, res) => {
    res.json({message: "PUT"})
})


//put
router.delete('/:id', async(req, res) => {
    res.json({message: "DELETE"})
})

module.exports = router;