const axios = require("axios")

const getCharById = (req, res) => {
    const { id } = req.params
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
            const character = {
                id: response.data.id,
                name: response.data.name,
                gender: response.data.gender,
                species: response.data.species,
                origin: response.data.origin,  //el front busca el origin.name, por lo cual espera obj completo
                image: response.data.image,
                status: response.data.status,
                location: response.data.location
            }
            return character
        })
        .then((character) => {
            if (character) {
                return res.status(200).json(character)
            } else {
                res.status(404).send("Not Found")
            }
        })
        .catch((error) => {
            res.status(500).json({ message: error })
        })
}


module.exports = {
    getCharById
}






// const axios = require("axios")


// const getCharById = (res, id) => {

//     axios
//         .get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then((response) => {
//             const character = {
//                 id: response.data.id,
//                 name: response.data.name,
//                 gender: response.data.gender,
//                 species: response.data.species,
//                 origin: response.data.origin,  //el front busca el origin.name, por lo cual espera obj completo
//                 image: response.data.image,
//                 status: response.data.status,
//                 location: response.data.location
//             }
//             return res
//                 .writeHead(200, { "Content-Type": "application/json" })
//                 .end(JSON.stringify(character))
//         })
//         .catch((error) => {
//             return res
//                 .writeHead(500, { "Content-Type": "text/plain" })
//                 .end(error.message)
//         })
// }


