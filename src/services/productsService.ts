import axiosInstance from "../config/axiosClient";

const getProducts = async () => {
  const res = await axiosInstance.get("products");
  return res.data;
};

const getSingleProduct = async (id: string) => {
  const res = await axiosInstance.get("products/" + id);
  return res.data;
};

export default { getProducts, getSingleProduct };
