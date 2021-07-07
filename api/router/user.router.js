const { createUser, getUserByUserId, getUsers, updateUser, deleteUser, login } = require('../controller/user.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');



router.post('/createUser', createUser);
router.post('/login', login);
router.get('/bringAllUsers', getUsers);
// router.get('/', getUsers);
router.get('/getUserByUserId/:id', checkToken, getUserByUserId);
router.patch('/updateUser', checkToken, updateUser);
router.delete('/deleteUser', checkToken, deleteUser);



module.exports = router;
