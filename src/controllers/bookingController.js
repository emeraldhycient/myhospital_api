const booking = require("../models/booking");

const bookingController = (req, res) => {
  const { name, email, complains, date, time, hospital_name, hospital_id } =
    req.body;
  if (
    !name ||
    !email ||
    !complains ||
    !date ||
    !time ||
    !hospital_name ||
    !hospital_id
  ) {
    res.status(400).json({
      message: "please fill all the fields",
    });
  }

  const newBooking = new booking({
    name,
    email,
    complains,
    date,
    time,
    hospital_name,
    hospital_id,
  });

  newBooking
    .save()
    .then((data) => {
      res.status(200).json({
        message: "booking successful",
        data: newBooking,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "booking failed",
      });
    });
};

module.exports = bookingController;
