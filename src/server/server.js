import express from 'express'
import initHttpServer from './script/httpServer.js'
import path from "path"
import { dirname } from 'path'
import { fileURLToPath } from 'url'


let app = express()
const port = process.env.PORT || 8080
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname, "../public")))
app = initHttpServer(port, app, __dirname)