const joi = require('joi');

const userSchema = joi.object({
    name : joi
            .string()
            .min(3)
            .trim()
            .lowercase()
            .required(),
    
    age : joi
            .number()
            .required(),

    email : joi
            .string()
            .email()
            .min(3)
            .trim()
            .lowercase()
            .required()
});

const dataValidation_joi = (req, res, next) => {
    const { error, value } = userSchema.validate(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

    req.body = value;
    next();
}

module.exports = { dataValidation_joi };