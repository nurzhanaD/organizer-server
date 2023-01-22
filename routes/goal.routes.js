const Router = require("express");
const router = new Router();
const goalController = require('../controllers/goal.controller');

router.post('/addGoal', goalController.addGoal);
router.get('/getGoals', goalController.getAllGoals);
router.get('/getGoals/:goal_id', goalController.getGoalById);
router.put('/updateGoal/:goal_id', goalController.updateGoal);
router.delete('/deleteGoal/:goal_id', goalController.deleteGoal);

module.exports = router;