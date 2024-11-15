import axiosInstance from "../config/axiosClient";
import { CartItem } from "../type/cart-types";

const addProductToCart = async (userId: number, products: CartItem[]) => {
  const rs = await axiosInstance.post("carts/add", { userId, products });
  return rs.data;
};

export default { addProductToCart };
