const { mongoose } = require("../db/connection");

const basicSchema = new mongoose.Schema({
    Title: String, 
    Information: String,
    IMG: String,
    isItCurrent: Boolean
}, {timestamps: true})

const Basic = mongoose.model("Basic", basicSchema, 'basics' );

module.exports = Basic