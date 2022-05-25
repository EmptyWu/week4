const express =  require('express');
const postsController = require('../controllers/postsController');
const router = express.Router();

router.post('/', postsController.get);

router.post('/create', postsController.create);

router.delete('/', postsController.delete);

router.delete('/:id', postsController.deleteQuery);

router.patch('/:id', postsController.editQuery);

module.exports =router;