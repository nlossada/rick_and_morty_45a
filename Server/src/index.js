const PORT = 3001;
const { server } = require("./app");
const { conn } = require("./DB_connection")



server.listen(PORT, async () => {
    try {
        await conn.sync({ force: false }) //al terminar Models pasar de true a false, si no no guarda datos
        console.log(`Server listening on http://localhost:${PORT}`)
    }
    catch (error) {
        console.log(error.message)
    }
})

/*
conn.sync ({ force: true})
    .then (() => {
        server.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`)
        })
     })
        .catch (error => console.log(error.message))
*/