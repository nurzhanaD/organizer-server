const { v4: uuidv4 } = require('uuid');
const db = require('../db.js');

class JournalController {
    async addJournal(req, res) {
        const {q1, q2, q3, q4, q5, my_day, _date, user_id} = req.body;
        const newJournal = await db.query('INSERT into journal (journal_id, q1, q2, q3, q4, q5, my_day, _date, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [uuidv4(), q1, q2, q3, q4, q5, my_day, _date, user_id]);
        res.json(newJournal.rows);
    }

    async getAllJournals(req, res) {
        const journal = await db.query('SELECT * FROM journal');
        res.json(journal.rows);
    }

    async getJournalById(req, res) {
        const journal_id = req.params.journal_id;
        const journal = await db.query('SELECT * FROM journal WHERE journal_id = $1', [journal_id]);
        res.json(journal.rows[0]);
    }

    async updateJournal(req, res) {
        const journal_id = req.params.journal_id;
        const column_names = Object.keys(req.body);
        let journal;
        for (let i = 0; i < column_names.length; i++) {
            let values = req.body[column_names[i]];
            journal = await db.query(`UPDATE journal SET ${column_names[i]} = $1 WHERE journal_id = $2 RETURNING *`,
            [values, journal_id]);
        }
        res.json(journal.rows[0]);
    }

    async deleteJournal(req, res) {
        const journal_id = req.params.journal_id;
        const journal = await db.query('DELETE FROM journal WHERE journal_id = $1', [journal_id]);
        res.json(journal.rows[0]);
    }
}

module.exports = new JournalController();