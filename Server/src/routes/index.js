const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const express = require("express");
const { postUser } = require("../controllers/postUser");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");
const router = express.Router()

// en app está server con ruta rickandmorty y deriva a router de este archivo

//controller busca en API EXTERNA
router.get("/character/:id", getCharById);

//controllers buscan en BBDD-POSTGRESQL
router.get("/login", login);
router.post("/login", postUser)

router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav)


module.exports = {
    router
}