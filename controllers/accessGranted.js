const accessGranted = async(req, res) => {
    if(req.access){
        res.status(200).send("Access granted");
    } else {
        res.status(401).send("Access denied!");
    }
}

module.exports = { accessGranted };