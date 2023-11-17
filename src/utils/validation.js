
function validation(input) {  //llegaría {email:"aaaaaa", password:"aas.sf"}
    const errors = {};
    const emailRegExp = /\S+@\S+\.\S+/;
    const passRegExpNumber = /^(?=.*\d).+$/;
    const passRegExpLength = /^.{6,10}$/;


    if (!input.email.length) errors.email = "You must enter an email"
    else {
        if (!emailRegExp.test(input.email)) errors.email = "You must enter a valid email"
        if (input.email.length > 35) errors.email = "You must enter less than 35 characters"
    }

    if (!input.password.length) errors.password = "You must enter a password"
    else {
        if (!passRegExpLength.test(input.password)) errors.password = "Password must have between 6 and 10 characters"
        if (!passRegExpNumber.test(input.password)) errors.password = "Password must have at least one number"

    }
    return errors;

}

export default validation;