const router = require("express").Router();
const beerRoutes = require("./beers");

// gift routes
router.use("/beers", beerRoutes);

module.exports = router;