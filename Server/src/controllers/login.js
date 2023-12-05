const users = require("../utils/users")

const loginController = (req, res) => {
    const { email, password } = req.query; //mejor sería desde body, no visible
    let access = false;
    users.forEach(user => {
        if (user.email === email && user.password === password) {
            access = true;
        }
    }
    )
    return res.json({ access });
}

module.exports = {
    loginController
} 