const users = require("../utils/login")

const loginController = (req, res) => {
    const { email, password } = req.query;
    const userValid = users.find(
        user => user.email === email && user.password === password
    )
    if (userValid) {
        return res.status(200).json({ access: true })
    }
    res.status(200).json({ access: false })
}

module.exports = {
    loginController
} 