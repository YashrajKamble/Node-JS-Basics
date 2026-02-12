const http = require("http")

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200,
        res.setHeader("Content-Type", "text.html")
    res.end("<h1>Node JS</h1> <p>Learning node js basics</p>")
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})