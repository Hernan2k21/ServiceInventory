const express = require('express');
const router = express.Router();
const exampleController = require('../Controllers/exampleController')

router.get('/', exampleController.example)
module.exports = router;
