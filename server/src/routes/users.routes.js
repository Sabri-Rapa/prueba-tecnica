const router = require('express').Router();
const { getUsers, getUserById, postUser } = require('../controllers/users.controller')

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', postUser)
// router.put('/:id', putUsers)
// router.delete('/', deleteUsers)

module.exports = router;