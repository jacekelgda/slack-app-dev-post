import express from 'express'
import filterReferrals from '../middleware/referrals'
import { extractEmail } from '../../util/string'

const router = new express.Router()

router.post('/events',filterReferrals, async (req, res) => {
    let status = 200
    const referralEmail = extractEmail(req.body.event.text)
    if (referralEmail) {
        console.log(`User: <@${req.body.event.user}> referred ${referralEmail}`)
    }
    res.status(status).send(req.body.challenge)
})

export default router
