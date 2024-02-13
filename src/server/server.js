import express from 'express'
import initHttpServer from './script/httpServer.js'
import path from "path"
import { dirname } from 'path'
import { fileURLToPath } from 'url'


let app = express()
const port = process.env.PORT || 8080
const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

app.use(express.static(path.join(_dirname, "../public")))
app = initHttpServer(port, app, _dirname)