const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const userRoutes = require('./user');
const sendScoresRoutes = require('./sendScores');

router.use(authRoutes);
router.use(userRoutes);
router.use(sendScoresRoutes);

module.exports = router;
