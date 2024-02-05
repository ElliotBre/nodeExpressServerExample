import express from 'express'
import { initHttpServer } from './src/script/httpServer.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { setDefaultConfig } from 'eslint/lib/rule-tester/rule-tester.js'

let app = express()
const port = process.env.PORT || 8080
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static('public'))
app = initHttpServer(port, app, __dirname)