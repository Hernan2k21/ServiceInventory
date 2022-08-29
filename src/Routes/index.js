const express = require('express');
const router = express.Router();
const exampleRoutes = require('./example')
const itemRoutes = require('./items')
router.use('/example', exampleRoutes)
router.use('/items', itemRoutes)
module.exports = router;
