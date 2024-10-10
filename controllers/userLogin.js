const jwt = require('jsonwebtoken');

const sampleLogin = async(req, res) => {
    const { email, password } = req.body;
    let matchFlag;

    if(!email || ! password){
        return res.status(400).send("Credentials missing!");
    }

    if(email === "fatima@gmail.com" && password === "ngiLogin"){
        matchFlag = true;
    } else {
        matchFlag = false;
    }

    if(matchFlag === true){
        const accessToken = jwt.sign(
            {
                "email" : email,
                "password" : password
            },
            process.env.ACCESS_KEY_SECRET,
            {expiresIn : '2m'}
        );


        const refreshToken = jwt.sign(
            {
                "email" : email,
                "password" : password
            },
            process.env.REFRESH_KEY_SECRET,
            {expiresIn : '5m'}
        );

        const tokenObj = {
            "access" : accessToken,
            "refresh" : refreshToken
        }

        res.status(200).json(tokenObj);
    } else {
        return res.status(400).send("Wrong credentials");
    }
}

module.exports = { sampleLogin }