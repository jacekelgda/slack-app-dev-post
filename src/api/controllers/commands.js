import express from 'express'
import { postJobOpening, pinPostedMessage } from '../services/slack'

const router = new express.Router()

router.post('/commands', async (req, res) => {
    let status = 200
    await postJobOpening(process.env.jobs_channel, req.body.text)
        .then(response => {
            pinPostedMessage(response)
        })
        .catch(() => {
            status = 503
        })
    res.status(status).send('Slash command completed.')
})

export default router
