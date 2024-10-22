const express = require('express');
const userRouter = require('./user');
const inventoryRouter = require('./inventory');
// const eventRouter = require('./events');
const reportRoutes = require('./report');

const eventRouter = require('./events');
const venueRouter = require('./venues');

const router = express.Router();
require('dotenv').config();

router.use("/user", userRouter);
router.use("/inventory", inventoryRouter);
// router.use("/event", eventRouter);
router.use('/reports', reportRoutes);

router.use("/events", eventRouter);
router.use("/venues", venueRouter);

module.exports = router;

