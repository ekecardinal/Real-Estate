import express from 'express'
const router = express.Router()

import {
  postProperty,
  getAllProperty,
  updateProperty,
  deleteProperty,
  getPropertyByUser,
} from '../controller/propertyController.js'

router.route('/').post(postProperty).get(getAllProperty)
router.route('/:id').delete(deleteProperty).patch(updateProperty)
router.route('/user').get(getPropertyByUser)

export default router
