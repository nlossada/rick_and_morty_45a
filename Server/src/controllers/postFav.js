const { Favorite } = require("../DB_connection")


const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body

        if (id && name && origin && status && image && species && gender) {
            const newFav = await Favorite.findOrCreate({
                //por variables es mejor que where: req.body , para saber exactamente que guarda
                where: { id, name, origin, status, image, species, gender }
            })
            const allFavs = await Favorite.findAll();
            // console.log(newFav)
            return res.status(200).json(allFavs)
        } else {
            return res.status(401).json({ error: "Faltan datos" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    postFav
}