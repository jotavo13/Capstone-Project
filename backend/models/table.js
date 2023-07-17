const { mongoose } = require("../db/connection");

const tableSchema = new mongoose.Schema({

CustomerId: String,
  Vlan: integer,
  Network: [
      { FirstUsable: string, LastUsable: String, BroadCast: String, Mask: String },
    ]
},{timestamps: true})

const Table = mongoose.model("Table", tableSchema, 'tables' );

module.exports = Table