const getData = (req, res) => {
    res.render('login', { error : "Invalid credentials"});
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