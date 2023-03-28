const { v4: uuidv4 } = require('uuid');
const db = require('../db.js');

class ToDoController {
    async addToDo(req, res) {
        const { to_do_content, _date, user_id } = req.body;
        const newToDo = await db.query('INSERT INTO to_do (to_do_id, to_do_content, _date, user_id) VALUES ($1, $2, $3, $4) RETURNING *', 
        [uuidv4(), to_do_content, _date, user_id]);
        res.json(newToDo.rows);
    }

    async getAllToDos(req, res) {
        const to_do = await db.query('SELECT * FROM to_do');
        res.json(to_do.rows);
    }

    async getToDoById(req, res) {
        const to_do_id = req.params.to_do_id;
        const to_do = await db.query('SELECT * FROM to_do WHERE to_do_id = $1', [to_do_id]);
        res.json(to_do.rows[0]);
    }

    async deleteToDo(req, res) {
        const to_do_id = req.params.note_id;
        const to_do = await db.query('DELETE FROM to_do WHERE to_do_id = $1', [to_do_id]);
        res.json(to_do.rows[0]);
    }
}

module.exports = new ToDoController();