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
        const column_names = Object.keys(req.body);
        let goal;
        for (let i = 0; i < column_names.length; i++) {
            let values = req.body[column_names[i]];
            goal = await db.query(`UPDATE goal SET ${column_names[i]} = $1 WHERE goal_id = $2 RETURNING *`,
            [values, goal_id]);
        }
        res.json(goal.rows[0]);
    }

    async deleteGoal(req, res) {
        const goal_id = req.params.goal_id;
        const goal = await db.query('DELETE FROM goal WHERE goal_id = $1', [goal_id]);
        res.json(goal.rows[0]);
    }
}

module.exports = new GoalController();