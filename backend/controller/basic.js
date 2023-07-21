////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const Basic = require('../models/basic')
const express = require('express');
// const Basic = require('../models/Basic')
const router = express.Router();
// const mongoose = require("mongoose");

// ROUTES////////////////////////////////



// New
router.get('/new', (req, res) => {
    res.render("basic/new.ejs")
   })
   


// Post
router.post('/', async (req, res) => {
    console.log(req.body);
    req.body.isItCurrent = req.body.isItCurrent === 'on' ? true : false;
	const basics = await Basic.create(req.body);
	res.redirect('/basic');
});


   //edit
   router.get('/:id/edit', async (req, res) => {
    const basic = await Basic.findById(req.params.id);
    res.render("basic/edit.ejs", {basic})
})

// Index...show all fiber
router.get('/', async (req, res) => {
    const basics = await Basic.find({});
    console.log(basics)
    res.render("basic/index.ejs", {basics});
});



    // Show...show one fiber
    router.get('/:id', async (req, res) => {
        const basic = await Basic.findById(req.params.id);
        // res.send(fruit);
        res.render("basic/show.ejs", {basic})
    });

    
//    // Delete
router.delete('/:id', async (req, res) => {
    const basic = await Basic.findByIdAndDelete(req.params.id);
   res.redirect('/basic');
});
   

    // Update
    router.put('/:id', async (req, res) => {
        const id = req.params.id;
        const basic = await Basic.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.redirect('/basic/');
    });



module.exports = router;