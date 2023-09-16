import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { Database } from '@/database/Database'

const app = express()

app.use(express.json())

Database.initialize()

app.listen(process.env.API_PORT, () => console.log('Server running at ' + process.env.API_PORT))
