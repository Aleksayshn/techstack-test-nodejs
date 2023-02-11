const express = require('express');

const {
  getApartmentsController,
  getApartmentByIdController,
  removeApartmentByIdController,
  updateApartmentByIdController,
  addApartmentController,
} = require('../controllers/apartmentsController');

const { asyncWrapper } = require('../helpers/routeHelpers');

const {
  addapartmentValidation,
  updateapartmentValidation,
  idValidation,
} = require('../middlewares/validationMiddleware');

const router = express.Router();

// GET: all apartments in the DB
router.get('/', asyncWrapper(getApartmentsController));

// GET: by apartment id
router.get('/:apartmentId', idValidation, asyncWrapper(getApartmentByIdController));

/**
 * POST: Create and save a new apartment in the DB.
 *
 * @returns new apartment
 */
router.post('/', addapartmentValidation, asyncWrapper(addApartmentController));

/**
 * DELETE: Remove apartment from the DB
 *
 * @returns removed apartment
 */
router.delete(
  '/:apartmentId',
  idValidation,
  asyncWrapper(removeApartmentByIdController)
);

/**
 * PUT: Updates exsiting apartment in the DB
 *
 * @returns updated apartment
 */
router.put(
  '/:apartmentId',
  idValidation,
  updateapartmentValidation,
  asyncWrapper(updateApartmentByIdController)
);

/**
 * PATCH: Update favorite field for a specific apartment
 *
 * @returns updated apartment
 */
router.patch(
  '/:apartmentId/favorite',
  idValidation,
  updateapartmentValidation,
);

module.exports = router;
