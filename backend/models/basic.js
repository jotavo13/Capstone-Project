const { mongoose } = require("../db/connection");

const basicSchema = new mongoose.Schema({
    Title: String, 
    Information: String,
    IMG: String,
    isItCurrent: Boolean,
    Title2: String,
    Information2: String,
    Title3: String,
    Information3: String,
    Title4: String,
    Information4: String,
    Title5: String,
    Information5: String

}, {timestamps: true})

const Basic = mongoose.model("Basic", basicSchema, 'basics' );

module.exports = Basic