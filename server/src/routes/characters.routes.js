const router = require('express').Router();
const { getMarvelApiCharacters } = require('../controllers/characters.controller')
// const { getMarvelApiCharacters, getCharacterById, createCharacter, putCharacter, deleteCharacter } = require('../controllers/characters.controller')

router.get('/marvel', getMarvelApiCharacters)
// router.get('/:id', getCharacterById)
// router.post('/', createCharacter)
// router.put('/', putCharacter)
// router.delete('/', deleteCharacter)

module.exports = router;