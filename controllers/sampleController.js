const getData = (req, res) => {
    const obj = {
        "name" : "Fatima Khalid",
        "age" : 22,
        "email" : "fatima@example.com",
        "middleWareMessage" : req.body.message
    }

    res.status(200).json(obj);
}

const postData = (req, res) => {
    const { name, age, email } = req.body;

    if(!name || !age || !email){
        res.status(400).send("Data missing!");
    } else {
        const sampleObj = {
            name,
            age,
            email
        }
        res.status(200).json(sampleObj);
    }
}

const redirectexample = (req, res) => {
    res.redirect("https://expressjs.com/");
}

module.exports = { getData, postData, redirectexample }