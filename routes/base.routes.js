const express = require('express')
const router = express.Router()

const { checkLoggedIn } = require('./../middleware')

// Endpoints
router.get('/', (req, res) => res.render('index', { user: req.user }))

router.get('/private', checkLoggedIn, (req, res) => res.render('./auth/private', { user: req.user }))



module.exports = router
