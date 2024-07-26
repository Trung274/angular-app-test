const express = require('express');
const router = express.Router();
const db = require('../../config/db');

/**
 * @swagger
 * /api/experience:
 *   get:
 *     summary: Get all experience entries
 *     tags: [Experience]
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
 *                   role:
 *                     type: string
 *                   company:
 *                     type: string
 *                   year:
 *                     type: string
 *                   details:
 *                     type: string
 *                   logo:
 *                     type: string
 *       500:
 *         description: Server error
 */

router.get('/', (_req, res) => {
  db.query('SELECT * FROM experience ORDER BY year DESC', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

/**
 * @swagger
 * /api/experience/{id}:
 *   get:
 *     summary: Get an experience entry by ID
 *     tags: [Experience]
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
 *                 role:
 *                   type: string
 *                 company:
 *                   type: string
 *                 year:
 *                   type: string
 *                 details:
 *                   type: string
 *                 logo:
 *                   type: string
 *       404:
 *         description: Experience entry not found
 *       500:
 *         description: Server error
 */

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM experience WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Experience entry not found' });
      return;
    }
    res.json(results[0]);
  });
});

module.exports = router;