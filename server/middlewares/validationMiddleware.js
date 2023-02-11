const { isValidObjectId } = require('mongoose');

const { ValidationError } = require('../helpers/errorHelpers');

const {
  apartmentAdditionSchema,
  apartmentUpdateSchema,
  apartmentStatusUpdateSchema,
} = require('../utils/apartmentsSchema');

module.exports = {
  /**
   * Joi validation middleware.
   * If there is a validation error, an error will be thrown.
   * Otherwise next() will be invoked.
   *
   * @param {*} req
   * @param {*} _
   * @param {*} next
   */
  addapartmentValidation: (req, _, next) => {
    const body = req.body;

    const { error: validationError } = apartmentAdditionSchema.validate(body);

    if (validationError) {
      next(new ValidationError(validationError.details[0].message));
    }

    next();
  },
  /**
   * Joi validation middleware.
   * If there is a validation error, an error will be thrown.
   * Otherwise next() will be invoked.
   *
   * @param {*} req
   * @param {*} _
   * @param {*} next
   */
  updateapartmentValidation: (req, _, next) => {
    const body = req.body;

    // body validation
    const { error: validationError } = apartmentUpdateSchema.validate(body);

    if (validationError) {
      next(new ValidationError(validationError.details[0].message));
    }

    next();
  },
  /**
   * Joi validation middleware.
   * If there is a validation error, an error will be thrown.
   * Otherwise next() will be invoked.
   *
   * @param {*} req
   * @param {*} _
   * @param {*} next
   */
  updateapartmentStatusValidation: (req, _, next) => {
    const body = req.body;

    // body validation
    const { error: validationError } = apartmentStatusUpdateSchema.validate(body);

    if (validationError) {
      next(new ValidationError(validationError.details[0].message));
    }

    next();
  },

  /**
   * MongoDB ID validation middleware.
   * If the provided id is incorrect, a new error is being thrown.
   *
   * @param {*} req
   * @param {*} _
   * @param {*} next
   */
  idValidation: (req, _, next) => {
    const id = req.params.id;

    const isValueid = isValidObjectId(id);

    if (!isValueid) {
      next(new ValidationError('Incorrect apartment id'));
    }

    next();
  },
};
