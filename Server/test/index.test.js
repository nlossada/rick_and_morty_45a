const { server } = require('../src/app');
const session = require('supertest');
const agent = session(server);


const char1 = { id: 1, name: "Rick" }
const char2 = { id: 2, name: "Morty" }


describe("Test de RUTAS", () => {

    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status 200", async () => {
            await agent.get('/rickandmorty/character/1').expect(200)

        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1')
            //response es {} con headers, y body(tiene toda la data)
            expect(response.body).toHaveProperty("id")
            expect(response.body).toHaveProperty("name")
            expect(response.body).toHaveProperty("species")
            expect(response.body).toHaveProperty("gender")
            expect(response.body).toHaveProperty("status")
            expect(response.body).toHaveProperty("origin")
            expect(response.body).toHaveProperty("image")

        })
        it('Si hay un error responde con status: 500', async () => {
            //forzar error en la request
            const response = await agent.get('/rickandmorty/character/900')
            expect(response.status).toBe(500)
        })
    })

    //! enviar datos por query
    describe("GET /rickandmorty/login", () => {
        it("Debe retornar objeto access:true al pasar email y password correctas", async () => {
            //credenciales llegan por query, cambiar request url
            const response = await agent.get('/rickandmorty/login?email=natilossada@hotmail.com&password=rick1510')
            expect(response.body.access).toBe(true)
            // expect(response.body).toEqual({access: true})
        })
        it("Debe retornar objeto access:false al pasar email y password incorrectas", async () => {
            const response = await agent.get('/rickandmorty/login?email=natilossada@hotmail.com&password=rickkkkk1510')
            expect(response.body.access).toBe(false)

        })
    })

    //! enviar datos por body con .send
    describe("POST /rickandmorty/fav", () => {
        it("Debe devolver array con el personaje enviado por body", async () => {
            // paso {1} --> [{1}]
            // paso {2} --> [{1}, {2}]
            const response = await agent
                .post('/rickandmorty/fav')
                .send(char1)
            expect(response.body).toEqual([char1])
        })
        it("Debe devolver array con todos los personaje enviados por body", async () => {
            // paso {1} --> [{1}]
            // paso {2} --> [{1}, {2}]
            const response = await agent
                .post('/rickandmorty/fav')
                .send(char2)
            expect(response.body).toContainEqual([char1])
            expect(response.body).toContainEqual([char2])
            //no puedo pasar toEqual [char1, char2] -> porque si lo acomodo distinto no va a pasar
            //toContainEqual, si contenido es el mismo, no importa el orden
        })
    })


    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Devuelve array con personajes si no elimina ningún personaje", async () => {
            const response = await agent.delete("/rickandmorty/fav/15")
            //sigue teniendo los char1 y char2 que les agregue, el char15 no existe
            expect(response.body).toContainEqual([char1])
            expect(response.body).toContainEqual([char2])
        })
        it("Devuelve array sin el personaje eliminado", async () => {
            //pruebo eliminar a char1 rick
            const response = await agent.delete("/rickandmorty/fav/1")
            //sigue teniendo char2 pero no el char1
            expect(response.body).not.toContainEqual([char1])
            expect(response.body).toContainEqual([char2])
        })
    })


})
