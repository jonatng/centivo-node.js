const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

// GET /users/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  // Check if id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });

    if (!user) {
      return res.status(404).json({ error: 'User not found or underage' });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID (age > 21 only)
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The user ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The user object
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: User not found or underage
 */
