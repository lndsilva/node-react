const http = require("http")

const hostname = "localhost"
const port = 3000

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain")
    res.end("Hello World!!!")
})

server.listen(port, hostname, () => {
    console.log(`Servidor rondando na porta ${port}`)
})