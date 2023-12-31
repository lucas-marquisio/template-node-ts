import { HttpServer } from './infra/http-server'

const server = new HttpServer()

server.start(4000)
