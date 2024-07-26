const express = require('express');
const router = express.Router();
const db = require('../../config/db');

/**
 * @swagger
 * /api/contact:
 *   get:
 *     summary: Get contact information
 *     tags: [Contact]
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
 *                 email:
 *                   type: string
 *                 facebook:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 linkedin:
 *                   type: string
 *                 github:
 *                   type: string
 *       404:
 *         description: Contact information not found
 *       500:
 *         description: Server error
 */

router.get('/', (_req, res) => {
  db.query('SELECT * FROM contact LIMIT 1', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Contact information not found' });
      return;
    }
    res.json(results[0]);
  });
});

module.exports = router;