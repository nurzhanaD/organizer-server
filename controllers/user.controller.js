const { v4: uuidv4 } = require('uuid');
const db = require('../db.js');

class UserController {
    async addUser(req, res) {
        try {
            const { email, _password, first_name, last_name, profile_image } = req.body;
            const newUser = await db.query('INSERT INTO user_info (user_id, email, _password, first_name, last_name, profile_image, goals, journal, notes, to_do_s) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', 
            [uuidv4(), email, _password, first_name, last_name, profile_image, [], [], [], []]);
            res.json(newUser.rows);
        } catch(e) {
            res.json(e);
        }
    }

    async signInUser(req, res) {
        const { email, _password } = req.body;
        const signedInUser = await db.query('SELECT user_id FROM user_info WHERE email = $1 AND _password = $2', 
        [ email, _password]);
        res.json(signedInUser.rows);
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
        const column_names = Object.keys(req.body);
        let user;
        for (let i = 0; i < column_names.length; i++) {
            let values = req.body[column_names[i]];
            user = await db.query(`UPDATE user_info SET ${column_names[i]} = $1 WHERE user_id = $2 RETURNING *`,
            [values, user_id]);
        }
        res.json(user.rows[0]);
    }

    async deleteUser(req, res) {
        const user_id = req.params.user_id;
        const user = await db.query('DELETE FROM user_info WHERE user_id = $1', [user_id]);
        res.json(user.rows[0]);
    }
};

module.exports = new UserController();