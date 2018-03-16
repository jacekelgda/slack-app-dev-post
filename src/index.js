import bodyParser from 'body-parser'
import express from 'express'
import { config } from 'dotenv'
config()

import api from './api'

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', api)
app.listen(port)
