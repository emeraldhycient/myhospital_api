const booking = require("../models/booking");

const allbookingController = (req, res) => {
  const { name } = req.body;

  booking
    .find({ name: name })
    .then((data) => {
      return res.status(200).json({
        status: "success",
        message: "bookings found",
        data: data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        status: "fail",
        message: "no booking found",
      });
    });
};

module.exports = allbookingController;
