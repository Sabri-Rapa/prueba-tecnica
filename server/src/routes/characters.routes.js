const router = require('express').Router();
const { getCharacters, createCharacter } = require('../controllers/characters.controller')
// const {createCharacter, putCharacter, deleteCharacter } = require('../controllers/characters.controller')

router.get('/', getCharacters)
// router.get('/:id', getCharacterById)
router.post('/', createCharacter)
// router.put('/', putCharacter)
// router.delete('/', deleteCharacter)

module.exports = router;