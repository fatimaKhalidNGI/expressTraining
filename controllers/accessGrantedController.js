const accessRole = (req, res) => {
    if(req.email){
        if(req.role === "Admin" || req.role === "Staff" || req.role === "User"){
            res.status(200).send("Access granted");
        }
    } else {
        return res.status(401).send("Unauthorized");
    }
}

module.exports = { accessRole };