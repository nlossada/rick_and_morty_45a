const http = require("http");
const data = require("./utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    switch (req.url) {
        case "/rickandmorty/character":
            const arrUrl = req.url.split("/")
            const idReq = arrUrl[arrUrl.length - 1]
            console.log(idReq)
            for (let i = 0; i < data.length; i++) {
                if (Number(idReq) === data[i].id) {
                    let charReq = data[i]
                    res.writeHead(200, { "Content-Type": "application/json" })
                    res.end(JSON.stringify(charReq))
                }
            }
            break;
        default:
            console.log("no se pidió ningun url válida al server")
    }

}).listen(3001, "127.0.0.1")
