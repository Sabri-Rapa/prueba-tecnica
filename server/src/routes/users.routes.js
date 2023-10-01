const router = require('express').Router();
const { getUsers, getUserById, postUser, verifyUser } = require('../controllers/users.controller')

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', postUser)
router.post('/verifyUser', verifyUser)
// router.put('/:id', putUsers)
// router.delete('/', deleteUsers)

module.exports = router;