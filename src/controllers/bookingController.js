const booking = require("../models/booking");

const bookingController = (req, res) => {
  const { name, email, complains, date, time, hospital_name, hospital_id } =
    req.body;
  console.log(req.body);
  if (
    !name ||
    !email ||
    !complains ||
    !date ||
    !time ||
    !hospital_name ||
    !hospital_id
  ) {
    return res.status(400).json({
      status: "fail",
      message: "please fill all the fields",
      data: { name, email, complains, date, time, hospital_name, hospital_id },
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
      return res.status(200).json({
        status: "success",
        message: "booking successful",
        data: newBooking,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: "fail",
        message: "booking failed",
      });
    });
};

module.exports = bookingController;
