import axiosInstance from "../config/axiosClient";

const getUser = async () => {
    const res = await axiosInstance.get("users");
    return res.data;
  };

export default { getUser }