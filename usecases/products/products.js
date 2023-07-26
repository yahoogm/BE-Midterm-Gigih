import { getProductsRepo } from "../../repositories/products/products.js";

export const getProductsUsecase = async (id) => {
  const products = await getProductsRepo(id);

  if (!products) {
    return null;
  }

  return products;
};
