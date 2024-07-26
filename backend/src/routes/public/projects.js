const express = require('express');
const router = express.Router();
const db = require('../../config/db');

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects
 *     tags: [Projects]
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
 *                   short_description:
 *                     type: string
 *                   contribution:
 *                     type: string
 *                   thumbnail:
 *                     type: string
 *                   github:
 *                     type: string
 *                   technologies:
 *                     type: array
 *                     items:
 *                       type: string
 *                   images:
 *                     type: array
 *                     items:
 *                       type: string
 *       500:
 *         description: Server error
 */

router.get('/', (_req, res) => {
  const query = `
    SELECT p.*, 
           GROUP_CONCAT(DISTINCT pt.technology) AS technologies,
           GROUP_CONCAT(DISTINCT pi.image_url) AS images
    FROM projects p
    LEFT JOIN project_technologies pt ON p.id = pt.project_id
    LEFT JOIN project_images pi ON p.id = pi.project_id
    GROUP BY p.id
  `;
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    results.forEach(result => {
      result.technologies = result.technologies ? result.technologies.split(',') : [];
      result.images = result.images ? result.images.split(',') : [];
    });
    res.json(results);
  });
});

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Get a project by ID
 *     tags: [Projects]
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
 *                 short_description:
 *                   type: string
 *                 contribution:
 *                   type: string
 *                 thumbnail:
 *                   type: string
 *                 github:
 *                   type: string
 *                 technologies:
 *                   type: array
 *                   items:
 *                     type: string
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *       404:
 *         description: Project not found
 *       500:
 *         description: Server error
 */

router.get('/:id', (req, res) => {
  const query = `
    SELECT p.*, 
           GROUP_CONCAT(DISTINCT pt.technology) AS technologies,
           GROUP_CONCAT(DISTINCT pi.image_url) AS images
    FROM projects p
    LEFT JOIN project_technologies pt ON p.id = pt.project_id
    LEFT JOIN project_images pi ON p.id = pi.project_id
    WHERE p.id = ?
    GROUP BY p.id
  `;
  db.query(query, [req.params.id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }
    const result = results[0];
    result.technologies = result.technologies ? result.technologies.split(',') : [];
    result.images = result.images ? result.images.split(',') : [];
    res.json(result);
  });
});

module.exports = router;