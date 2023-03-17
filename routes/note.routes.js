const Router = require("express");
const router = new Router();
const noteController = require('../controllers/note.controller.js');

router.post('/addNote', noteController.addNote);
router.get('/getNotes', noteController.getAllNotes);
router.get('/getNotes/:note_id', noteController.getNoteById);
router.delete('/deleteNote/:note_id', noteController.deleteNote);

module.exports = router;