const express = require('express');
const router = express.Router();
const db = require('../../config/db');

/**
 * @swagger
 * /api/personal-info:
 *   get:
 *     summary: Get personal information
 *     tags: [Personal Info]
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
 *                 tagline:
 *                   type: string
 *                 favorite_quote:
 *                   type: string
 *                 personality_type:
 *                   type: string
 *                 fun_fact:
 *                   type: string
 *                 currently_learning:
 *                   type: string
 *                 life_goal:
 *                   type: string
 *                 personality_traits:
 *                   type: array
 *                   items:
 *                     type: string
 *                 favorite_colors:
 *                   type: array
 *                   items:
 *                     type: string
 *                 hobbies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       icon:
 *                         type: string
 *       500:
 *         description: Server error
 */

router.get('/', (_req, res) => {
  const query = `
    SELECT pi.*, 
           GROUP_CONCAT(DISTINCT JSON_OBJECT('name', h.name, 'icon', h.icon)) AS hobbies,
           GROUP_CONCAT(DISTINCT JSON_OBJECT('color', fc.color)) AS favorite_colors,
           GROUP_CONCAT(DISTINCT JSON_OBJECT('trait', pt.trait)) AS personality_traits
    FROM personal_info pi
    LEFT JOIN hobbies h ON pi.id = h.personal_info_id
    LEFT JOIN favorite_colors fc ON pi.id = fc.personal_info_id
    LEFT JOIN personality_traits pt ON pi.id = pt.personal_info_id
    GROUP BY pi.id
  `;
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    results.forEach(result => {
      result.hobbies = result.hobbies ? JSON.parse(`[${result.hobbies}]`) : [];
      result.favorite_colors = result.favorite_colors ? JSON.parse(`[${result.favorite_colors}]`) : [];
      result.personality_traits = result.personality_traits ? JSON.parse(`[${result.personality_traits}]`) : [];
    });
    res.json(results);
  });
});

module.exports = router;