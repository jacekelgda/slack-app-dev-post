import express from 'express'
import { postJobOpening } from '../services/slack'

const router = new express.Router()

router.all('/commands', async (req, res) => {
    let status = 200
    await postJobOpening(process.env.jobs_channel, req.body.text)
        .catch(() => {
            status = 503
        })
    res.status(status).send('Slash command completed.')
})

export default router
