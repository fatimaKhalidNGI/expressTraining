const jwt = require('jsonwebtoken');

const refreshToken = (req, res) => {
    const refToken = req.cookies.jwt;
    console.log("Refresh token from cookie: ", refToken);

    if(!refToken){
        return res.status(401).send("Unauthorzied");
    }

    jwt.verify(
        refToken,
        process.env.REFRESH_KEY_SECRET,
        (err, decoded) => {
            if(err){
                return res.status(403).send("Forbidden. Error: ", err);
            }

            const accessToken = jwt.sign(
                {
                    "email" : decoded.email,
                    "password" : decoded.password,
                    "role" : decoded.role
                },
                process.env.ACCESS_KEY_SECRET,
                {
                    expiresIn : '5m'
                }
            );

            res.status(200).json({"New access token: " : accessToken});
        }
    )
}

module.exports = { refreshToken }