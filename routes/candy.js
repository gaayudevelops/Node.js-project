const path = require('path');

const express = require('express');

const candyController = require('../controllers/candy');

const router = express.Router();

// add-candy => POST

router.post('/add-candy', candyController.postAddCandy);

// get-candies => GET

router.get('/get-candies', candyController.getCandies);

// edit-candy => PUT
router.put('/edit-candy/:id', candyController.editCandy);


module.exports = router;
