import { useState } from "react";
import validation from "../utils/validation";


function Form(props) {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value })
        setErrors(validation({ ...userData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div>
            <form>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    key="email"
                    id="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <p style={{ color: "grey" }} >{errors.email ? errors.email : null}</p>

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    key="password"
                    id="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <p>{errors.password ? errors.password : null}</p>

                <div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>


            </form>
        </div >
    )
}

export default Form;