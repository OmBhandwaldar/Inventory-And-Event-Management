// routes/venues.js
const express = require("express");
const router = express.Router();
const {Venue} = require("../db");

//dummy date to check venues
const venues = [
    { name: "Main Hall", type: "Auditorium", isAvailable: true },
    { name: "Conference Room 1", type: "Conference", isAvailable: false },
    { name: "Open Space", type: "Outdoor", isAvailable: true },
  ];

// Get all venues
router.get("/", async (req, res) => {
  try {
    const venues = await Venue.find({});
    res.json(venues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST route to add a new venue
router.post("/", async (req, res) => {
  const { name, type, isAvailable } = req.body;

  const newVenue = new Venue({
    name,
    type,
    isAvailable,
  });
  // console.log(newVenue)
  try {
    const savedVenue = await newVenue.save();
    res.status(201).json(savedVenue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Request a venue (mark it as unavailable)
router.post("/request", async (req, res) => {
  const { venueName } = req.body;
  try {
    const venue = await Venue.findOneAndUpdate(
      { name: venueName },
      { isAvailable: false },
      { new: true }
    );
    if (venue) {
      res.json({ success: true, venue });
    } else {
      res.status(404).json({ error: "Venue not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
