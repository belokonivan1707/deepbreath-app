import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProductSchema = new Schema({
  makerId: { type: Schema.Types.ObjectId, ref: 'Maker' },
  title: { type: String, unique: true, required: true },
  imageUrl: String,
  maker: String,
  city: String,
  price: Number,
  tags: [String],
  isLiked: Boolean,
  rating: Number,
  weight: Number,
});

export default model('Product', ProductSchema);
