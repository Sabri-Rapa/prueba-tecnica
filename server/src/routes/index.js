const router = require('express').Router();
const { getUsers, postUser } = require('../controllers/user.controller')

router.get('/', getUsers)
// router.get('/:id', getUsersById)
router.post('/', postUser)
// router.put('/:id', putUsers)
// router.delete('/', deleteUsers)

module.exports = router;