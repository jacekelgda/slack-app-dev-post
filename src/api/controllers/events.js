import express from 'express'

const router = new express.Router()

router.post('/events', async (req, res) => {
    let status = 200
    res.status(status).send(req.body.challenge)
})

export default router
