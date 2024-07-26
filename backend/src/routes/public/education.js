const express = require('express');
const router = express.Router();
const db = require('../../config/db');

/**
 * @swagger
 * /api/education:
 *   get:
 *     summary: Get all education entries
 *     tags: [Education]
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
 *                   degree:
 *                     type: string
 *                   institution:
 *                     type: string
 *                   year:
 *                     type: string
 *                   details:
 *                     type: string
 *       500:
 *         description: Server error
 */

router.get('/', (_req, res) => {
  db.query('SELECT * FROM education ORDER BY year DESC', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

/**
 * @swagger
 * /api/education/{id}:
 *   get:
 *     summary: Get an education entry by ID
 *     tags: [Education]
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
 *                 degree:
 *                   type: string
 *                 institution:
 *                   type: string
 *                 year:
 *                   type: string
 *                 details:
 *                   type: string
 *       404:
 *         description: Education entry not found
 *       500:
 *         description: Server error
 */

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM education WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Education entry not found' });
      return;
    }
    res.json(results[0]);
  });
});

module.exports = router;