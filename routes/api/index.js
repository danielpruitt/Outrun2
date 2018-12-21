const router = require("express").Router();
const beerRoutes = require("./beers");

// gift routes
router.use("/beer", beerRoutes);

module.exports = router;