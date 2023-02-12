const { Apartment } = require('../db/apartmentModel');

/**
 * Get all the apartments from the DB
 * @async
 * @returns apartments from the DB
 */
const listApartments = async () => await Apartment.find({});

/**
 * Get apartment by id from the DB
 * @async
 * @param {string} id
 * @returns found apartment by id
 */
const getApartmentById = async id => {
  return await Apartment.findById(id);
};

/**
 * Remove apartment by id from the DB
 * @async
 * @param {string} id
 * @returns deleted apartment by id
 */
const removeApartment = async id => {
  return await Apartment.findByIdAndDelete(id);
};

/**
 * Create a new apartment in the DB
 * @async
 * @param {object} body
 * @returns Newly created apartment
 */
const addApartment = async body => await Apartment.create({ ...body });

/**
 * Updates apartment with the given properties on the DB
 *
 * @async
 * @param {string} id
 * @param {object} body
 * @returns apartment before update from the DB
 */
const updateApartment = async (id, body) => {
  return await Apartment.findByIdAndUpdate(id, { $set: { ...body } });
};

/**
 * Updates apartment status with the given id and favorite boolean value
 *
 * @async
 * @param {string} id
 * @param {object} body
 * @returns apartment before update from the DB
 */
const updateStatusApartment = async (id, body) => {
  const data = await Apartment.findByIdAndUpdate(id, {
    $set: { favorite: body.favorite },
  });

  return data;
};

module.exports = {
  listApartments,
  getApartmentById,
  removeApartment,
  addApartment,
  updateApartment,
  updateStatusApartment,
};
