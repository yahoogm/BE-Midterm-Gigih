import { getProductsUsecase } from "../usecases/products/products.js";

export const getProducts = async (req, res) => {
  const { id } = req.query;
  const products = await getProductsUsecase(id);

  if (products.length === 0) {
    return res.status(404).json({
      message: "Products not found!",
    });
  }

  res.status(200).json({
    data: products,
  });
};
