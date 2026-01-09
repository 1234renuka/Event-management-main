import express from "express";
import Booking from "../models/booking.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Book Event
router.post("/:eventId", authMiddleware, async (req, res) => {
  try {
    const exists = await Booking.findOne({
      user: req.user.id,
      event: req.params.eventId,
    });

    if (exists) {
      return res.status(400).json({ message: "Event already booked" });
    }

    const booking = await Booking.create({
      user: req.user.id,
      event: req.params.eventId,
    });

    res.status(201).json({ message: "Event booked successfully", booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get My Bookings
router.get("/my", authMiddleware, async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate("event");
  res.json(bookings);
});

export default router;
