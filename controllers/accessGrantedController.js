const accessGranted_admin = async(req, res) => {
    if(req.email && req.role === "Admin"){
        res.status(200).send("Access granted");
    } else {
        res.status(401).send("Unauthorized. Access denied!");
    }
}

const accessGranted_staff = async(req, res) => {
    if(req.email && req.role === "Staff"){
        res.status(200).send("Access granted");
    } else {
        res.status(401).send("Unauthorized. Access denied!");
    }
}

const accessGranted_users = async(req, res) => {
    if(req.email && req.role === "User"){
        res.status(200).send("Access granted");
    } else {
        res.status(401).send("Unauthorized. Access denied!");
    }
}

module.exports = { accessGranted_admin, accessGranted_staff, accessGranted_users };