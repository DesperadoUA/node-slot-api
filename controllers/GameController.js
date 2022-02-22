const {Router} = require('express')
const router = Router()

router.get('/game', async (req, res) => {
    const response = {
        confirm: 'ok',
        template: 'Game Index'
    }
    res.status(200).json(response)
})
router.get('/game/seeds', async (req, res) => {
    const response = {}
    res.status(200).json(response)
})

router.get('/game/:url', async (req, res) => {
    const response = {}
    res.status(200).json(response)
})
module.exports = router