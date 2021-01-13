const express = require("express");
const placesController = require("../controllers/places-controller");

const router = express.Router();

router.get("/:pid", placesController.getPlaces);

router.get("/user/:uid", placesController.getUserById);

router.post("/", placesController.createPlace);

router.patch("/:pid", placesController.editPlace);

router.delete("/:pid", placesController.deletePlace);

module.exports = router;
