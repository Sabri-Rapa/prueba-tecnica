const router = require('express').Router();
const { getCharacters, createCharacter, putCharacter, deleteCharacter } = require('../controllers/characters.controller')

router.get('/', getCharacters)
router.post('/', createCharacter)
router.put('/:id', putCharacter)
router.delete('/:id', deleteCharacter)

module.exports = router;