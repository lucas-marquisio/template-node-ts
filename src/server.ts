import express, { Express } from 'express'
import setupRoutes from '@/set-routes'
import { PORT } from '@/utils/variables'

export const app: Express = express()

setupRoutes(app)

app.listen(PORT)
