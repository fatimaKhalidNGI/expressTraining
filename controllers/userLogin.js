const jwt = require('jsonwebtoken');

const sampleLogin = async(req, res) => {
    const { email, password, role } = req.body;
    let matchFlag;

    if(!email || !password || !role){
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
                "password" : password,
                "role" : role
            },
            process.env.ACCESS_KEY_SECRET,
            {expiresIn : '2m'}
        );


        const refreshToken = jwt.sign(
            {
                "email" : email,
                "password" : password,
                "role" : role
            },
            process.env.REFRESH_KEY_SECRET,
            {expiresIn : '5m'}
        );

        const tokenObj = {
            "access" : accessToken,
            "refresh" : refreshToken
        }

        console.log(tokenObj);

        res.cookie('jwt', refreshToken, { maxAge : 24*3600*1000 });
        res.render('welcome', { email : email});
    } else {
        return res.status(400).send("Wrong credentials");
    }
}

module.exports = { sampleLogin }