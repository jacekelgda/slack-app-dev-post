import express from 'express'
import filterReferrals from '../middleware/referrals'

const router = new express.Router()

router.post('/events',filterReferrals, async (req, res) => {
    let status = 200
    res.status(status).send(req.body.challenge)
})

export default router
