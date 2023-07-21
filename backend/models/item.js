const { mongoose } = require("../db/connection");

const itemSchema = new mongoose.Schema({
    Title: String, 
    Information: String,
    isItCurrent: Boolean
}, {timestamps: true})

const Item = mongoose.model("Item", itemSchema, 'items' );

module.exports = Item