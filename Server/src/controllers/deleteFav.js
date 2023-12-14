const { Favorite } = require("../DB_connection");


const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;
        // no es necesario validar el id, porque es parte de la ruta params
        await Favorite.destroy({
            where: { id: id }
        })
        const allFavs = await Favorite.findAll();
        return res.json(allFavs)
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}


module.exports = {
    deleteFav
}