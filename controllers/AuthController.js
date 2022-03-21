const {Router} = require('express')
const crypto = require('crypto')
const router = Router()
const auth = require('./../middleware/auth')
const AuthService = require('../services/AuthService')

router.post('/admin/login', async (req, res) => {
    const {password, login} = req.body
    const hash = crypto.createHash('md5').update(password).digest('hex')
    const response = await AuthService.login(login, hash)
    res.status(200).json(response)
})
router.post('/admin/logout', auth, async (req, res) => {
    const {id, session} = req.body
    const response = await AuthService.logout(id, session)
    res.status(200).json(response)
})
router.post('/admin/check-user', async (req, res) => {
    const {id, session} = req.body
    const response = await AuthService.checkUser(id, session)
    res.status(200).json(response)
})

module.exports = router