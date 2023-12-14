const { Op } = require("sequelize");
const { User } = require("../DB_connection");


const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        if (email && password) {
            const emailUser = await User.findOne({ where: { email: email } })
            if (emailUser) { //trae todo el objeto {email: , password}
                if (emailUser.password === password) {
                    res.status(200).json({
                        access: true,
                        // actualUser: emailUser.id//para hacer tabla intermedia
                    })
                }
                else {
                    return res.status(403).json({ error: "Contraseña incorrecta" })
                }
            } else if (!emailUser) {
                return res.status(404).json({ error: "Usuario no encontrado" })
            }

        } else {
            return res.status(400).json({ error: "Faltan datos" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

module.exports = {
    login
}