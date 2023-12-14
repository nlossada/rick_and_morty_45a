require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");



const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
   { logging: false, native: false }
);


FavoriteModel(sequelize);
UserModel(sequelize);
// sequelize = {models: {Favorite:Favorite, User: User}}


const { User, Favorite } = sequelize.models;
//relacion many to many N:N
User.belongsToMany(Favorite, { through: "user_favorite" })
Favorite.belongsToMany(User, { through: "user_favorite" })

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
