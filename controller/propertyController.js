import Property from '../models/Property.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'

const postProperty = async (req, res) => {
  const {
    category,
    request,
    price,
    propertyLocation,
    phone,
    description,
    image,
  } = req.body
  if (
    !category ||
    !request ||
    !price ||
    !propertyLocation ||
    !description ||
    !phone
    // !image
  ) {
    throw new BadRequestError('Please provide all values')
  }
  req.body.createdBy = req.user.userId
  const property = await Property.create(req.body)
  res.status(StatusCodes.CREATED).json({ property })
}
const getAllProperty = async (req, res) => {
  res.send('Get all Property')
}
const getPropertyByUser = async (req, res) => {
  const property = await Property.find({ createdBy: req.user.userId })
  res
    .status(StatusCodes.OK)
    .json({ property, totalProperty: property.length, numOfPages: 1 })
}
const updateProperty = async (req, res) => {
  res.send('Update Property')
}
const deleteProperty = async (req, res) => {
  res.send('Delete Property')
}

export {
  postProperty,
  getAllProperty,
  updateProperty,
  deleteProperty,
  getPropertyByUser,
}
