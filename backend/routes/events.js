// routes/events.js
const express = require("express");
const router = express.Router();
const {Event} = require("../db");

// Get events for a specific date
// router.get("/:date", async (req, res) => {
//   try {
//     const events = await Event.find({ date: req.params.date });
//     console.log(events)
//     res.json("events");
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// Get events for a specific date
router.get("/:date", async (req, res) => {
  try {
    const { date } = req.params;
    // console.log(date)
    // Create a date range for the entire day
    const startOfDay = new Date(date);
    const endOfDay = new Date(date);
    endOfDay.setUTCHours(23, 59, 59, 999); // Set time to the end of the day
    
    // Fetch events within the day range
    const events = await Event.find({
      date: {
        $gte: startOfDay,
        $lt: endOfDay,
      },
    });
    // console.log(events)

    // Return events or 404 if none are found
    if (events.length > 0) {
      res.json(events);
    } else {
      res.status(404).json({ message: "No events found for this date." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET route to fetch all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find(); // Fetch all events from the database
    return res.json(events); // Send the events as JSON response
  } catch (err) {
    // Handle any errors
    return res.status(500).json({ error: err.message });
  }
});

// Add a new event
router.post("/", async (req, res) => {
  try {
    const { title, fromTime, toTime, details, venue, date } = req.body;

    const newEvent = new Event({ title, fromTime, toTime, details, venue, date });

    // Save the new event and send the response
    await newEvent.save();
    return res.json(newEvent); // Only one response is sent here
    
  } catch (err) {
    // Handle any errors
    return res.status(500).json({ error: err.message });
  }
});


module.exports = router;
