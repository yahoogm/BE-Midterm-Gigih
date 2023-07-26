import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  video_id: {
    require: true,
    type: String,
  },

  product_id: {
    require: true,
    type: String,
  },

  link_product: {
    require: true,
    type: String,
  },

  title: {
    require: true,
    type: String,
  },

  price: {
    require: true,
    type: Number,
  },
});

const product = mongoose.model("products", productsSchema);

export default product;
