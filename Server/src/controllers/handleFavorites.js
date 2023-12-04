
let myFavorites = [];

const postFav = (req, res) => {
    const { id, name } = req.body;
    if (id && name) {
        myFavorites.push(req.body)
    }
    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    // console.log(id)
    myFavorites = myFavorites.filter(
        favChar => favChar.id !== Number(id)
    );
    return res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav,
}