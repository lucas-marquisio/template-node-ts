import express, { Express } from 'express'
import setupRoutes from './set-routes'

export const app: Express = express()

setupRoutes(app)

app.listen(4000)
