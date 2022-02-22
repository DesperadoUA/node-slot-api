const {Router} = require('express')
const CasinoService = require('../services/CasinoService')
const router = Router()

router.get('/casino', async (req, res) => {
    const response = await CasinoService.index()
    res.status(200).json(response)
})
router.get('/casinos/seeds', async (req, res) => {
    const response = await CasinoService.seedsCategory(10)
    res.status(200).json(response)
})
router.get('/casino/seeds', async (req, res) => {
    const response = await CasinoService.seeds(10)
    res.status(200).json(response)
})

router.get('/casino/:url', async (req, res) => {
    const response = await CasinoService.getPublicDateByUrl(req.params.url)
    res.status(200).json(response)
})
module.exports = router