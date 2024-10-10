const sampleMiddleWareCustom = (req, res, next) => {
    req.body.message = "Custom middleware";
    next();
}

module.exports = sampleMiddleWareCustom;