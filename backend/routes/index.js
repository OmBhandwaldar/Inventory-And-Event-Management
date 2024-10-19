const express = require('express');
const userRouter = require('./user');
const inventoryRouter = require('./inventory');
const eventRouter = require('./events');
const router = express.Router();

router.use("/user", userRouter);
router.use("/inventory", inventoryRouter);
router.use("/event", eventRouter);

module.exports = router;

