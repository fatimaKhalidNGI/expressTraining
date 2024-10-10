const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if(!authHeader?.startsWith('Bearer ')){
        return res.status(401).send('Token missing');
    }

    const token = authHeader.split(' ')[1];
    console.log(token);

    jwt.verify(
        token,
        process.env.ACCESS_KEY_SECRET,
        (err, decoded) => {
            if(err){
                return res.status(401).send("Invalud token");
            } else {
                console.log("Inside verifyJWT");

                req.access = decoded.email;

                next();
            }
        }
    );
}

module.exports = { verifyJWT }