const Joi = require('joi');

/**
 * Joi validation schema for new apartment addition
 *
 * @param name - with type string, and aplhanum with validation; required
 * @param rooms - type number; required
 * @param price - type number; required
 * @param description - type string with default false value;
 */
const apartmentAdditionSchema = Joi.object({
  name: Joi.string().required(),
  rooms: Joi.number().required(),
  price: Joi.number().required(),
  description: Joi.string().default(false),
});

/**
 * Joi validation schema for apartment update
 */
const apartmentUpdateSchema = Joi.object({
  name: Joi.string().required(),
  rooms: Joi.number().required(),
  price: Joi.number().required(),
  description: Joi.string().default(false),
});


module.exports = {
  apartmentAdditionSchema,
  apartmentUpdateSchema,
};
