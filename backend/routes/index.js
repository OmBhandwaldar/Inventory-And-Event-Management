const express = require('express');
const userRouter = require('./user');
const inventoryRouter = require('./inventory');
// const eventRouter = require('./events');
const reportRoutes = require('./report');

const router = express.Router();
require('dotenv').config();

router.use("/user", userRouter);
router.use("/inventory", inventoryRouter);
// router.use("/event", eventRouter);
router.use('/reports', reportRoutes);

module.exports = router;

