const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller.js");

router.post('/addUser', userController.addUser);
router.get('/getUsers', userController.getAllUsers);
router.get('/getUsers/:user_id', userController.getOneUser);
router.put('/updateUser/:user_id', userController.updateUser);
router.delete('/deleteUser/:user_id', userController.deleteUser);

module.exports = router;