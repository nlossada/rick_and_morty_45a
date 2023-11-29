const http = require("http");
const PORT = 3001
const data = require("./utils/data") //es un array sin nombre, le asigno el que quiero

http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req.url.includes("/rickandmorty/character")) {
            const idReq = req.url.split("/").pop()
            const character = data.find(
                char => char.id === Number(idReq)
            ) //o usar filter(()=>..)[0] me quedo con posic 0
            // console.log(character) lo probamos con npm start en server y abriendo en nav 3001/rickandmorty.../2 ej y vemos en terminal la resp
            if (character) {
                return res
                    .writeHead(200, { "Content-Type": "application/json" })
                    .end(JSON.stringify(character))
            } else {  //responder con misma lógica de respuesta
                return res
                    .writeHead(200, { "Content-Type": "application/json" })
                    .end(JSON.stringify({ message: "UPS! Character not found" }))

            }
        }
        return res
            .writeHead(200, { "Content-Type": "application/json" })
            .end(JSON.stringify({ message: "UPS! Character not found" }))

    })
    .listen(PORT, "127.0.0.1",
        () => (console.log(`Server listening on port ${PORT}`))) // puerto, "localhost" poner numeros para usar el thunder client, cb))
