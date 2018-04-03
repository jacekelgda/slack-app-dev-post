import express from 'express'
import filterReferrals from '../middleware/referrals'
import { extractEmail } from '../../util/string'
import { postReferralNotification, getMessagePermalink } from '../services/slack'

const router = new express.Router()

router.post('/events',filterReferrals, async (req, res) => {
    let status = 200
    const referralEmail = extractEmail(req.body.event.text)
    if (referralEmail) {
        const permalink = await getMessagePermalink(req.body.event.thread_ts)
        await postReferralNotification(req.body.event.user, referralEmail, permalink.permalink)
    }
    res.status(status).send(req.body.challenge)
})

export default router
