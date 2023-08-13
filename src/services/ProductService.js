import axios from "axios";

export const ProductService = {
  getAllProduct: async function () {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  },
  getOneProduct: async function (id) {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  },
};
