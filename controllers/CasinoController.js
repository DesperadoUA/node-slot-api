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
    const response = await CasinoService.getPublicPostByUrl(req.params.url)
    res.status(200).json(response)
})
router.get('/casinos/:url', async (req, res) => {
    const response = {
        confirm: 'error',
        body: {}
    }
    res.status(200).json(response)
})


router.post('/admin/casinos', async (req, res)=>{
    const response = {
        confirm: 'error',
        body: {}
    }
    res.status(200).json(response)
})
router.post('/admin/casino/update', async (req, res)=>{
    const response = {
        confirm: 'error',
        body: {}
    }
    res.status(200).json(response)
})
router.post('/admin/casino/delete', async (req, res)=>{
    const response = {
        confirm: 'error',
        body: {}
    }
    res.status(200).json(response)
})
router.post('/admin/casino/store', async (req, res)=>{
    const response = {
        confirm: 'error',
        body: {}
    }
    res.status(200).json(response)
})

router.post('/admin/casino/category', async (req, res)=>{
    const response = {
        confirm: 'error',
        body: {}
    }
    res.status(200).json(response)
})
router.post('/admin/casino/category/update', async (req, res)=>{
    const response = {
        confirm: 'error',
        body: {}
    }
    res.status(200).json(response)
})
router.post('/admin/casino/category/delete', async (req, res)=>{
    const response = {
        confirm: 'error',
        body: {}
    }
    res.status(200).json(response)
})
router.post('/admin/casino/category/store', async (req, res)=>{
    const response = {
        confirm: 'error',
        body: {}
    }
    res.status(200).json(response)
})

router.post('/admin/casino/category/:url', async (req, res)=>{
    const response = {
        confirm: 'error',
        body: {}
    }
    res.status(200).json(response)
})
router.post('/admin/casino/:url', async (req, res)=>{
    const response = {
        confirm: 'error',
        body: {}
    }
    res.status(200).json(response)
})
module.exports = router