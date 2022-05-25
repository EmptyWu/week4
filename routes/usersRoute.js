var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/', usersController.get);

// 取得 -單筆
router.get('/:id', usersController.getQuery);

// 新增
router.post('/', usersController.create);

// 刪除 -全部
router.delete('/', usersController.delete);

// 刪除 -單筆
router.delete('/:id', usersController.deleteQuery);

// 編輯 -單筆
router.patch('/:id', usersController.editQuery);

// 編輯 -單筆(重設密碼)
router.patch('/:id/resetPassword', usersController.resetPassword);


module.exports = router;
