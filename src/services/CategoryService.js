import axios from "axios";

export const CategoryService = {
  getAllCategory: async function () {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  },
};
