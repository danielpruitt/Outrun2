const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/beerlis"
);

const beerSeed = [
    {
        beer: "First Beer",
        type: "Lager",
        ibu: "4",
        abv : "5.2",
        details:"It's basically a better Pabst",
        date: new Date(Date.now())
    },
    {
        beer: "Will's Smelly Foot",
        type: "IPA",
        ibu: "88",
        abv : "10",
        details:"It's basically a better Pabst",
        date: new Date(Date.now())
    }
]
db.Beer
    .remove({})
    .then(() => db.Beer.collection.insertMany(beerSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
