const Router = require("express");
const router = new Router();
const toDoController = require('../controllers/to-do.controller.js');

router.post('/addToDo', toDoController.addToDo);
router.get('/getToDos', toDoController.getAllToDos);
router.get('/getToDos/:to_do_id', toDoController.getToDoById);
router.put('/updateToDo/:to_do_id', toDoController.updateCompleteStatus);
router.delete('/deleteToDo/:to_do_id', toDoController.deleteToDo);

module.exports = router;