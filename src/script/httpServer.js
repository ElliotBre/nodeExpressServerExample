import path from 'path'

export const initHttpServer = (port, app, __dirname) => {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'public/index.html'))
    })

            app.listen(port)
    console.log('Server started at http://localhost:' + port)

    return app
}
