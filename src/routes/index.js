const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const allbookingController = require("../controllers/allbookingController");

router.post("/booking", bookingController);
router.get("/allbooking", allbookingController);

module.exports = router;
