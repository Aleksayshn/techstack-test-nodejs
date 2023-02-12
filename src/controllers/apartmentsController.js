const {
  listApartments,
  getApartmentById,
  removeApartment,
  addApartment,
  updateApartment,
} = require('../services/apartmentsService');

const { NotFoundError } = require('../helpers/errorHelpers');

const getApartmentsController = async (_, res) => {
  const data = await listApartments();

  res.json(data);
};

const getApartmentByIdController = async (req, res) => {
  const id = req.params.id;

  const data = await getApartmentById(id);

  if (!data) {
    throw new NotFoundError('apartment has not been found.');
  }

  res.json(data);
};

const addApartmentController = async (req, res) => {
  const body = req.body;

  const addedapartment = await addApartment(body);

  res.status(201).json(addedapartment);
};

const removeApartmentByIdController = async (req, res) => {
  const id = req.params.id;

  const removedapartment = await removeApartment(id);

  if (!removedapartment) {
    throw new NotFoundError('apartment has not been found.');
  }

  res.json(removedapartment);
};

const updateApartmentByIdController = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const updatedapartment = await updateApartment(id, body);

  if (!updatedapartment) {
    throw new NotFoundError('apartment has not been found.');
  }

  res.json(Object.assign(updatedapartment, body));
};

module.exports = {
  getApartmentsController,
  getApartmentByIdController,
  addApartmentController,
  removeApartmentByIdController,
  updateApartmentByIdController,
};
