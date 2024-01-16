// productsRouter.js
const express = require('express');

const authMiddleware = require('../../middleware/authMiddleware');
const { getProducts } = require('./controllers');

const router = express.Router();

router.get('/', authMiddleware, getProducts);

module.exports = router;
