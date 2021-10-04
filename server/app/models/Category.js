import mongoose from 'mongoose';

const categorySchema =  new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
})

// Convert schema to model
export default mongoose.model('Category', categorySchema);