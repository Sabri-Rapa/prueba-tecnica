const router = require('express').Router();
const usersRoutes = require('./users.routes')
const charactersRoutes = require('./characters.routes')

router.use('/users', usersRoutes)
router.use('/characters', charactersRoutes)

module.exports = router;