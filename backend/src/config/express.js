const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerJson = require('../../../swagger.json');

const app = express();

app.use(cors());
app.use(express.json());

const swaggerSpec = swaggerJsDoc(swaggerJson);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const personalInfoRoutes = require('../routes/public/personalInfo');
app.use('/api/personal-info', personalInfoRoutes);
// const publicRoutes = require('../routes/public');
// app.use('/api', publicRoutes);

module.exports = app;