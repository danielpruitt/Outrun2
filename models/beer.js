const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
    name: { type: String},
    type: { type: String},
    ibu: {type: String},
    abv: { type: String},
    details: {type: String},
    date: { type: Date, default: Date.now }
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;