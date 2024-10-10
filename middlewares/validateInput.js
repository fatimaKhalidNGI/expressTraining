const { check, validationResult } = require('express-validator');

const validateMW = [
    check('name').isLength({ min: 3 }).withMessage("Username too short").trim().escape(),
    check('email').isEmail().withMessage("Incorrect email format").normalizeEmail(),
    check('age').isNumeric().withMessage("Age must be numeric").trim().escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }
];

module.exports = validateMW;
