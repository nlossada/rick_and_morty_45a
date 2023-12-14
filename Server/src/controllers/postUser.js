const { User } = require("../DB_connection")

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const newUser = await User.findOrCreate({ where: { email, password } })
            return res.json(newUser)
        }
        return res.status(400).json({ error: "Faltan Datos" })

    } catch (error) {
        return res.status(500).json(error.message)
    }
}


module.exports = {
    postUser
}