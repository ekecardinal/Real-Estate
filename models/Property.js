import mongoose from 'mongoose'

const PropertySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'Please provide category'],
      maxlength: 20,
    },
    request: {
      type: String,
      required: [true, 'Please provide request'],
      maxlength: 20,
    },
    price: {
      type: String,
      required: [true, 'Please provide price'],
      maxlength: 20,
    },
    propertyLocation: {
      type: String,
      required: [true, 'Please provide location'],
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, 'Please provide description'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide phone No.'],
    },
    image: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Property', PropertySchema)
