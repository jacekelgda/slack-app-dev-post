import express from 'express'
import commandsController from './controllers/commands'
import eventsController from './controllers/events'
import verificationMiddleware from './middleware/verification'

const router = new express.Router()

router.use(verificationMiddleware)
router.use(commandsController)
router.use(eventsController)

export default router
