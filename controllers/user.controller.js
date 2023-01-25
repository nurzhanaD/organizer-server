const { v4: uuidv4 } = require('uuid');
const db = require('../db.js');

class UserController {
    async addUser(req, res) {
        const { email, _password, first_name, last_name, profile_image } = req.body;
        const newUser = await db.query('INSERT INTO user_info (user_id, email, _password, first_name, last_name, profile_image, goals, journal, notes, to_do_s) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', 
        [uuidv4(), email, _password, first_name, last_name, profile_image, [], [], [], []]);
        res.json(newUser.rows);
    }

    async getAllUsers(req, res) {
        const users = await db.query('SELECT user_id, email, first_name, last_name, profile_image, goals, journal, notes, to_do_s FROM user_info');
        res.json(users.rows);
    }

    async getOneUser(req, res) {
        const user_id = req.params.user_id;
        const user = await db.query('SELECT user_id, email, first_name, last_name, profile_image, goals, journal, notes, to_do_s FROM user_info WHERE user_id = $1', [user_id]);
        res.json(user.rows[0]);
    }

    async updateUser(req, res) {
        const user_id = req.params.user_id;
        const {email, _password, first_name, last_name, profile_image, journal, goals, notes, to_do_s} = req.body;
        const user = await db.query('UPDATE user_info SET email = $1, _password = $2, first_name = $3, last_name = $4, profile_image = $5, journal = $6, goals = $7, notes = $8, to_do_s = $9 WHERE user_id = $10 RETURNING *',
        [email, _password, first_name, last_name, profile_image, journal, goals, notes, to_do_s, user_id]);
        res.json(user.rows[0]);
    }

    async deleteUser(req, res) {
        const user_id = req.params.user_id;
        const user = await db.query('DELETE FROM user_info WHERE user_id = $1', [user_id]);
        res.json(user.rows[0]);
    }
};

module.exports = new UserController();