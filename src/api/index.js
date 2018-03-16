import express from 'express'
import commandsController from './controllers/commands'
import verificationMiddleware from './middleware/verification'

const router = new express.Router()

router.use(verificationMiddleware)
router.use(commandsController)

export default router
