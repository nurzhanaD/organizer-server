const { v4: uuidv4 } = require('uuid');
const db = require('../db.js');

class NoteController {
    async addNote(req, res) {
        const { note_content, _date, user_id } = req.body;
        const newNote = await db.query('INSERT INTO note (note_id, note_content, _date, user_id) VALUES ($1, $2, $3, $4) RETURNING *', 
        [uuidv4(), note_content, _date, user_id]);
        res.json(newNote.rows);
    }

    async getAllNotes(req, res) {
        const note = await db.query('SELECT * FROM note');
        res.json(note.rows);
    }

    async getNoteById(req, res) {
        const note_id = req.params.note_id;
        const note = await db.query('SELECT * FROM note WHERE note_id = $1', [note_id]);
        res.json(note.rows[0]);
    }

    async deleteNote(req, res) {
        const note_id = req.params.note_id;
        const note = await db.query('DELETE FROM note WHERE note_id = $1', [note_id]);
        res.json(note.rows[0]);
    }
}

module.exports = new NoteController();