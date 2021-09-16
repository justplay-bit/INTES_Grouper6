const { Joi } = require("express-validation");
/**
 * Chanson Validators
 */

const ChansonValidators = {
    validateCreate: {
        body: Joi.object({
            titre: Joi.string().max(75).required(),
            temps: Joi.number().integer().min(0).max(10).required(),
            genre: Joi.string().max(250),
            auteur: Joi.string().max(75).required(),
        }),
    },
    validateUpdate: {
        params: Joi.object({
            id: Joi.string().guid().required(),
        }),
        body: Joi.object({
            titre: Joi.string().max(75).required(),
            temps: Joi.number().integer().min(0).max(10).required(),
            genre: Joi.string().max(250),
            auteur: Joi.string().max(75).required(),
        }),
    },
};

module.exports = ChansonValidators;
