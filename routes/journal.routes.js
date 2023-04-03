const Router = require("express");
const router = new Router();
const journalController = require('../controllers/journal.controller.js');

router.post('/addJournal', journalController.addJournal);
router.get('/getJournals', journalController.getAllJournals);
router.get('/getJournal/:journal_id', journalController.getJournalById);
router.put('/updateJournal/:journal_id', journalController.updateJournal);
router.delete('/deleteJournal/:journal_id', journalController.deleteJournal);

module.exports = router;