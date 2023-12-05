const axios = require("axios")

const getCharById = async (req, res) => {
    try {
        const { id } = req.params
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        const character = {
            id: response.data.id,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin,
            image: response.data.image,
            status: response.data.status,
            location: response.data.location,
        }
        return character.name
            ? res.status(200).json(character)
            : res.status(404).send("Not Found")

    } catch (error) {
        return res.status(500).send(error.message)
    }
}




module.exports = {
    getCharById
}





