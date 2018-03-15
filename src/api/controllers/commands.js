import express from 'express'

const router = new express.Router()

router.all('/commands', async (req, res) => {
    console.log(req.body)

    res.status(200).send('Thanks.')
})

export default router
