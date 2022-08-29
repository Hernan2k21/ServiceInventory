const express = require('express');
const router = express.Router();
const itemsController = require('../Controllers/itemsController')

router.get('/', itemsController.getAllItem)
router.get('/:id', itemsController.getItemById)
router.post('/', itemsController.postItem)
router.put('/:id', itemsController.putItem)

module.exports = router;
