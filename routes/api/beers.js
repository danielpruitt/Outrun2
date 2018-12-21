const router = require("express").Router();
const beersController = require("../../controllers/beersController");

// Matches with "/api/gifts"
router.route("/")
    .get(beersController.findAll)
    .post(beersController.create);

// Matches with "/api/gifts/:id"
router
    .route("/:id")
    .get(beersController.findById)
    .put(beersController.update)
    .delete(beersController.remove);

module.exports = router;