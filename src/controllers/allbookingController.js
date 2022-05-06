const booking = require("../models/booking");

const allbookingController = (req, res) => {
  const { name } = req.body;

  booking
    .find({ name: name })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({
        message: "no booking found",
      });
    });
};
