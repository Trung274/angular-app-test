const express = require('express');
const router = express.Router();
const db = require('../../config/db');

/**
 * @swagger
 * /api/certifications:
 *   get:
 *     summary: Get all certifications
 *     tags: [Certifications]
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
 *                   name:
 *                     type: string
 *                   institution:
 *                     type: string
 *                   year:
 *                     type: string
 *                   image:
 *                     type: string
 *       500:
 *         description: Server error
 */

router.get('/', (_req, res) => {
  db.query('SELECT * FROM certifications ORDER BY year DESC', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

/**
 * @swagger
 * /api/certifications/{id}:
 *   get:
 *     summary: Get a certification by ID
 *     tags: [Certifications]
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
 *                 name:
 *                   type: string
 *                 institution:
 *                   type: string
 *                 year:
 *                   type: string
 *                 image:
 *                   type: string
 *       404:
 *         description: Certification not found
 *       500:
 *         description: Server error
 */

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM certifications WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Certification not found' });
      return;
    }
    res.json(results[0]);
  });
});

module.exports = router;