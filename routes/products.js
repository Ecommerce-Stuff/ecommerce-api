const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
    try {
        res.json(await Product.find());
    } catch(error) {
        res.json({message: error});
    }
});

// GET specific product by ID
router.get('/:productId', async (req, res) => {
    try {
        res.json(await Product.findById(req.params.productId));
    } catch(error) {
        res.json({message: error});
    }
});

module.exports = router;