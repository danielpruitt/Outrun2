import axios from "axios";

export default {
    //get all beers
    getBeers: function() {
        return axios.get("/api/beers");
    },
    // get beer by id
    getBeer: function(id) {
        return axios.get("/api/beers/" + id)
    },
    //delete a beer
    deleteBeer: function(id) {
        return axios.delete("/api/beers/" + id)
    },
    //save a beer
    saveBeer: function(beerData) {
        return axios.post("/api/beers", beerData)
    }
};