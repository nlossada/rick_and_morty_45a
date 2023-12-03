
let myFavorites = [];

const postFav = (req, res) => {
    const { id, name } = req.body;
    if (id && name) {
        myFavorites.push(req.body)
        return res.status(200).json(myFavorites)
    }
}

const deleteFav = (req, res) => {
    const { id } = req.params
    const filterFavs = myFavorites.filter((
        favChar => favChar.id !== Number(id)
    ))
    if (filterFavs) {
        return res.status(200).json(filterFavs)
    }
}

module.exports = {
    postFav,
    deleteFav,
}