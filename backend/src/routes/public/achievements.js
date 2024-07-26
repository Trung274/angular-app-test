const express = require('express');
const router = express.Router();
const db = require('../../config/db');

/**
 * @swagger
 * /api/achievements:
 *   get:
 *     summary: Get all achievements
 *     tags: [Achievements]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   year:
 *                     type: string
 *                   image:
 *                     type: string
 *       500:
 *         description: Server error
 */

router.get('/', (_req, res) => {
  db.query('SELECT * FROM achievements ORDER BY year DESC', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

/**
 * @swagger
 * /api/achievements/{id}:
 *   get:
 *     summary: Get an achievement by ID
 *     tags: [Achievements]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 year:
 *                   type: string
 *                 image:
 *                   type: string
 *       404:
 *         description: Achievement not found
 *       500:
 *         description: Server error
 */

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM achievements WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Achievement not found' });
      return;
    }
    res.json(results[0]);
  });
});

module.exports = router;