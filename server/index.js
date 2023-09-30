const app = require('./src/app')

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`)
})

server.on('error', error => {
    console('Server error: ' + error)
})