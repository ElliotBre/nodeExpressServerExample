const express = require('express')
const { spawn } = require('child_process')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const python = spawn('python', ['script.py'])
    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...')
        dataToSend = data.toString()
    })
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`)
        // send data to browser
        res.send(dataToSend)
    })
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}!`)
})
