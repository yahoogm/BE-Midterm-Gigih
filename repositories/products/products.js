import product from "../../models/products.js";

export const getProductsRepo = async (id) => {
  const data = await product.find({ video_id: id });

  return data;
};
