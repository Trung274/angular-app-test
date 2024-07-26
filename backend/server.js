require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerJson = require('./swagger.json');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const personalInfoRoutes = require('./src/routes/public/personalInfo');
const aboutRoutes = require('./src/routes/public/about');
const educationRoutes = require('./src/routes/public/education');
const experienceRoutes = require('./src/routes/public/experience');
const skillsRoutes = require('./src/routes/public/skills');
const projectsRoutes = require('./src/routes/public/projects');
const certificationsRoutes = require('./src/routes/public/certifications');
const achievementsRoutes = require('./src/routes/public/achievements');
const contactRoutes = require('./src/routes/public/contact');

app.use('/api/personal-info', personalInfoRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/certifications', certificationsRoutes);
app.use('/api/achievements', achievementsRoutes);
app.use('/api/contact', contactRoutes);

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

const PORT = process.env.PORT || 3360;
const swaggerSpec = swaggerJsDoc(swaggerJson);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});