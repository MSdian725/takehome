const http = require("http");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/studentdata/data.json`, 'utf-8');
const students = JSON.parse(data);

const server = http.createServer((req, res) => {
    if (req.url === "/data") {
        const headers = {
            "Content-type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
            "Access-Control-Max-Age": 2592000, 
          };
        res.writeHead(200, headers)
        res.end(data);
    }
})

const PORT = 5000;
server.listen(PORT, "127.0.0.1", () => {
    console.log(`Server Running on ${PORT}`)
})