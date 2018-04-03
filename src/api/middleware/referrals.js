import { findMessageByTs } from '../services/slack'

export default async (req, res, next) => {
    if (req.body.event.thread_ts && req.body.event.channel === process.env.jobs_channel) {
        const message = await findMessageByTs(req.body.event.thread_ts, process.env.jobs_channel)
        if (message.messages[0].bot_id === process.env.bot_id) {
            next()
        }
    }
}
