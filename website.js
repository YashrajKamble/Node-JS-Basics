const http = require("http")
const fs = require("fs")
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader("Content-Type", "text.html")
    if (req.url == "/node") {
        res.statusCode = 200,
            res.end("<h1>Node JS </h1> <p>Learning node js basics</p>")

    } else if (req.url == "/about") {
        res.statusCode = 200,
            res.end("<h1>about page</h1> <p>about page details</p>")
    } else if (req.url == "/") {
        res.statusCode = 200;
        const data = fs.readFileSync("index.html")
        res.end(data.toString())
    } else {
        res.statusCode = 404,
            res.end("<h1>Not Found</h1> <p>THIS PAGE IS NOT AVAILABLE</p>")
    }
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})