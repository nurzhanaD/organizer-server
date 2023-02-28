const { v4: uuidv4 } = require('uuid');
const db = require('../db.js');

class GoalController {
    async addGoal(req, res) {
        const { which, why, how, _when, _type, comment, _date, user_id } = req.body;
        const newGoal = await db.query('INSERT INTO goal (goal_id, which, why, how, _when, _type, comment, _date, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', 
        [uuidv4(), which, why, how, _when, _type, comment, _date, user_id]);
        res.json(newGoal.rows);
    }

    async getAllGoals(req, res) {
        const goal = await db.query('SELECT * FROM goal');
        res.json(goal.rows);
    }

    async getGoalById(req, res) {
        const goal_id = req.params.goal_id;
        const goal = await db.query('SELECT * FROM goal WHERE goal_id = $1', [goal_id]);
        res.json(goal.rows[0]);
    }

    async updateGoal(req, res) {
        const goal_id = req.params.goal_id;
        const { which, why, how, _when, importance, comment, _date} = req.body;
        const goal = await db.query('UPDATE goal SET which = $1, why = $2, how = $3, _when = $4, importance = $5, comment = $6, _date = $7 WHERE goal_id = $8 RETURNING *',
        [which, why, how, _when, importance, comment, _date, goal_id]);
        res.json(goal.rows[0]);
    }

    async deleteGoal(req, res) {
        const goal_id = req.params.goal_id;
        const goal = await db.query('DELETE FROM goal WHERE goal_id = $1', [goal_id]);
        res.json(goal.rows[0]);
    }
}

module.exports = new GoalController();