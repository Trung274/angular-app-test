const express = require('express');
const router = express.Router();
const db = require('../../config/db');

/**
 * @swagger
 * /api/about:
 *   get:
 *     summary: Get about information
 *     tags: [About]
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
 *                 age:
 *                   type: integer
 *                 introduction:
 *                   type: string
 *                 photo:
 *                   type: string
 *                 interests:
 *                   type: array
 *                   items:
 *                     type: string
 *       500:
 *         description: Server error
 */

router.get('/', (_req, res) => {
  const query = `
    SELECT a.*, 
           GROUP_CONCAT(DISTINCT i.interest) AS interests
    FROM about a
    LEFT JOIN interests i ON a.id = i.about_id
    GROUP BY a.id
  `;
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length > 0) {
      const result = results[0];
      result.interests = result.interests ? result.interests.split(',') : [];
      res.json(result);
    } else {
      res.status(404).json({ message: 'About information not found' });
    }
  });
});

module.exports = router;