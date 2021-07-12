import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const MakerSchema = new Schema({
  title: { type: String, unique: true, required: true },
  photo: String,
  city: String,
  price: String,
  description: String,
  businessTags: [String],
  productsImage: [String],
  isLiked: Boolean,
  rating: Number,
  productsID: [Number],
});

export default model('Maker', MakerSchema);
